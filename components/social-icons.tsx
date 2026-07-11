import type { ComponentPropsWithoutRef } from "react";

type SocialIconProps = ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export function GithubMarkIcon({
  size = 18,
  className,
  ...props
}: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.86 10.92c.576.104.786-.25.786-.556 0-.274-.01-1-.016-1.962-3.198.695-3.873-1.542-3.873-1.542-.524-1.332-1.28-1.686-1.28-1.686-1.046-.715.08-.701.08-.701 1.158.081 1.767 1.19 1.767 1.19 1.028 1.76 2.697 1.252 3.354.958.103-.745.402-1.252.73-1.54-2.553-.29-5.238-1.278-5.238-5.69 0-1.257.45-2.286 1.188-3.092-.118-.29-.515-1.46.112-3.045 0 0 .968-.31 3.17 1.18a11.05 11.05 0 0 1 5.77 0c2.2-1.49 3.166-1.18 3.166-1.18.63 1.585.233 2.756.115 3.045.74.806 1.186 1.835 1.186 3.091 0 4.423-2.69 5.396-5.25 5.68.414.357.783 1.06.783 2.138 0 1.543-.014 2.787-.014 3.167 0 .31.207.667.792.554A11.502 11.502 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinMarkIcon({
  size = 18,
  className,
  ...props
}: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9.75h3.97V21H3V9.75Zm6.46 0H13.3v1.54h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V21H17.9v-4.99c0-1.19-.02-2.72-1.66-2.72-1.67 0-1.92 1.3-1.92 2.64V21H9.46V9.75Z" />
    </svg>
  );
}
