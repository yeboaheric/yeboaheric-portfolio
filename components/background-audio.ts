"use client";

type BackgroundAudioState = {
  isPlaying: boolean;
};

type Listener = (state: BackgroundAudioState) => void;

const TRACK_SRC = "/audio/samuelfjohanns-minimal-109310.mp3";
const TARGET_VOLUME = 0.25;
const USER_ENABLED_KEY = "portfolio-music-enabled";
const SESSION_UNLOCKED_KEY = "portfolio-music-unlocked";
const LOOP_FADE_MS = 1100;
const LOOP_FADE_SECONDS = 1.15;

let audio: HTMLAudioElement | null = null;
let fadeFrame: number | null = null;
let listeners = new Set<Listener>();
let isPlaying = false;
let isLoopRestarting = false;
let loopFadeStarted = false;

const emit = () => {
  const state = { isPlaying };
  listeners.forEach((listener) => listener(state));
};

const canUseDOM = () => typeof window !== "undefined";

const isEnabled = () =>
  canUseDOM() && window.localStorage.getItem(USER_ENABLED_KEY) === "true";

const isUnlocked = () =>
  canUseDOM() && window.sessionStorage.getItem(SESSION_UNLOCKED_KEY) === "true";

const cancelFade = () => {
  if (!canUseDOM() || fadeFrame === null) return;
  window.cancelAnimationFrame(fadeFrame);
  fadeFrame = null;
};

const fadeAudioTo = (targetVolume: number, duration: number, onComplete?: () => void) => {
  if (!canUseDOM()) return;
  const instance = getBackgroundAudioElement();
  if (!instance) return;

  cancelFade();

  const startVolume = instance.volume;
  const startTime = performance.now();

  const step = (time: number) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    instance.volume = startVolume + (targetVolume - startVolume) * eased;

    if (progress < 1) {
      fadeFrame = window.requestAnimationFrame(step);
      return;
    }

    instance.volume = targetVolume;
    fadeFrame = null;
    onComplete?.();
  };

  fadeFrame = window.requestAnimationFrame(step);
};

const restartLoop = async () => {
  const instance = getBackgroundAudioElement();
  if (!instance) return;

  isLoopRestarting = true;
  loopFadeStarted = false;
  instance.currentTime = 0;
  instance.volume = 0;

  try {
    await instance.play();
    isPlaying = true;
    emit();
    fadeAudioTo(TARGET_VOLUME, LOOP_FADE_MS, () => {
      isLoopRestarting = false;
    });
  } catch {
    isLoopRestarting = false;
    isPlaying = false;
    emit();
  }
};

const handleTimeUpdate = () => {
  const instance = audio;
  if (!instance || isLoopRestarting || loopFadeStarted) return;
  if (!instance.duration || !Number.isFinite(instance.duration)) return;
  if (instance.duration - instance.currentTime > LOOP_FADE_SECONDS) return;

  loopFadeStarted = true;
  fadeAudioTo(0, LOOP_FADE_MS);
};

const handleEnded = () => {
  if (!isEnabled() || !isUnlocked()) {
    isPlaying = false;
    emit();
    return;
  }

  void restartLoop();
};

const attachListeners = (instance: HTMLAudioElement) => {
  instance.addEventListener("play", () => {
    isPlaying = true;
    emit();
  });

  instance.addEventListener("pause", () => {
    if (isLoopRestarting) return;
    isPlaying = false;
    emit();
  });

  instance.addEventListener("timeupdate", handleTimeUpdate);
  instance.addEventListener("ended", handleEnded);
  instance.addEventListener("loadedmetadata", () => {
    loopFadeStarted = false;
  });
};

export const getBackgroundAudioElement = () => {
  if (!canUseDOM()) return null;
  if (audio) return audio;

  audio = new window.Audio(TRACK_SRC);
  (window as typeof window & { __portfolioBackgroundAudio?: HTMLAudioElement }).__portfolioBackgroundAudio = audio;
  audio.preload = "auto";
  audio.loop = false;
  audio.volume = 0;
  attachListeners(audio);
  return audio;
};

export const getBackgroundAudioState = (): BackgroundAudioState => ({
  isPlaying,
});

export const subscribeBackgroundAudio = (listener: Listener) => {
  listeners.add(listener);
  listener(getBackgroundAudioState());
  return () => {
    listeners.delete(listener);
  };
};

export const ensureBackgroundAudioSession = async () => {
  if (!canUseDOM()) return;
  const instance = getBackgroundAudioElement();
  if (!instance) return;

  if (!isEnabled() || !isUnlocked() || !instance.paused) {
    emit();
    return;
  }

  try {
    await instance.play();
    isPlaying = true;
    emit();
    fadeAudioTo(TARGET_VOLUME, 900);
  } catch {
    isPlaying = false;
    emit();
  }
};

export const toggleBackgroundAudio = async () => {
  if (!canUseDOM()) return;
  const instance = getBackgroundAudioElement();
  if (!instance) return;

  if (isPlaying) {
    window.localStorage.setItem(USER_ENABLED_KEY, "false");
    fadeAudioTo(0, 500, () => {
      instance.pause();
      isPlaying = false;
      emit();
    });
    return;
  }

  window.localStorage.setItem(USER_ENABLED_KEY, "true");
  window.sessionStorage.setItem(SESSION_UNLOCKED_KEY, "true");
  instance.volume = 0;
  loopFadeStarted = false;

  try {
    await instance.play();
    isPlaying = true;
    emit();
    fadeAudioTo(TARGET_VOLUME, 1000);
  } catch {
    window.localStorage.setItem(USER_ENABLED_KEY, "false");
    isPlaying = false;
    emit();
  }
};
