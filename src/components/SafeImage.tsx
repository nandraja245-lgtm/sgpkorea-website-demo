import {useState} from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  aspectClass?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  caption,
  aspectClass = 'aspect-video',
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="w-full overflow-hidden border border-slate-200 bg-slate-100">
      <div className={`relative w-full overflow-hidden bg-slate-900 ${aspectClass}`}>
        {!failed ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className={`h-full w-full object-cover ${className}`}
          />
        ) : (
          <div className="spec-grid-bg flex h-full w-full flex-col items-center justify-center bg-slate-100 px-6 text-center">
            <span className="font-mono text-xs text-slate-500">SGPKOREA · ILLUSTRATIVE VISUAL</span>
            <p className="mt-2 max-w-sm text-sm text-slate-600">{alt}</p>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
