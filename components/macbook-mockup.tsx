type MacbookMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

export function MacbookMockup({ src, alt, className = "" }: MacbookMockupProps) {
  return (
    <div className={`macbook-mockup ${className}`}>
      <div className="macbook-lid">
        <div className="macbook-bezel">
          <span className="macbook-camera" aria-hidden="true" />
          <div className="macbook-screen">
            <img src={src} alt={alt} />
          </div>
        </div>
      </div>
      <div className="macbook-base" aria-hidden="true">
        <span className="macbook-notch" />
      </div>
    </div>
  );
}
