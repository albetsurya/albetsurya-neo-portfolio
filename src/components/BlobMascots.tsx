import React from "react";

export type SvgProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
};

/**
 * 1. Amoeba Blob (Kuning Mustard - Adaptasi Baris 1 Kiri)
 */
export const AmoebaBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M58 22 C66 10 86 14 82 30 C80 40 90 44 98 50 C110 58 108 78 94 82 C84 84 84 94 80 102 C74 112 58 110 52 98 C48 90 38 92 28 94 C14 96 10 80 18 70 C24 62 22 54 16 46 C8 34 20 18 34 26 C44 32 52 30 58 22 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M58 22 C66 10 86 14 82 30 C80 40 90 44 98 50 C110 58 108 78 94 82 C84 84 84 94 80 102 C74 112 58 110 52 98 C48 90 38 92 28 94 C14 96 10 80 18 70 C24 62 22 54 16 46 C8 34 20 18 34 26 C44 32 52 30 58 22 Z"
      fill="#FFB703"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <circle
      cx="43"
      cy="60"
      r="11"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="43" cy="60" r="5" fill="#0F172A" />

    {/* Right Eye */}
    <circle
      cx="73"
      cy="60"
      r="11"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="73" cy="60" r="5" fill="#0F172A" />
  </svg>
);

/**
 * 2. Spiky Star Blob (Oranye Neon - Adaptasi Baris 1 Ke-2)
 */
export const SpikyBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M64 12 L74 38 L102 32 L88 54 L108 68 L82 76 L92 100 L68 86 L58 106 L46 84 L20 100 L30 72 L14 54 L34 46 L22 20 L50 38 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
      strokeLinejoin="round"
    />

    {/* Main Body */}
    <path
      d="M64 12 L74 38 L102 32 L88 54 L108 68 L82 76 L92 100 L68 86 L58 106 L46 84 L20 100 L30 72 L14 54 L34 46 L22 20 L50 38 Z"
      fill="#FF4911"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="48"
      cy="58"
      rx="9"
      ry="14"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="50" cy="58" rx="5" ry="9" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="70"
      cy="58"
      rx="9"
      ry="14"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="72" cy="58" rx="5" ry="9" fill="#0F172A" />
  </svg>
);

/**
 * 3. Wavy Stack Blob (Pink Permen - Adaptasi Baris 1 Ke-3)
 */
export const WavyStackBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M34 44 C18 40 20 18 60 18 C100 18 102 40 82 44 C108 46 108 72 84 76 C106 80 104 102 60 102 C16 102 14 80 36 76 C12 72 12 46 34 44 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M34 44 C18 40 20 18 60 18 C100 18 102 40 82 44 C108 46 108 72 84 76 C106 80 104 102 60 102 C16 102 14 80 36 76 C12 72 12 46 34 44 Z"
      fill="#F472B6"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="48"
      cy="62"
      rx="8.5"
      ry="13"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="46" cy="62" rx="4.5" ry="7.5" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="70"
      cy="62"
      rx="8.5"
      ry="13"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="68" cy="62" rx="4.5" ry="7.5" fill="#0F172A" />
  </svg>
);

/**
 * 4. Sleepy Puff Blob (Merah Oranye - Adaptasi Baris 1 Ke-4)
 */
export const SleepyBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M60 20 C92 20 104 38 102 62 C100 88 84 100 58 100 C30 100 18 86 18 60 C18 34 32 20 60 20 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M60 20 C92 20 104 38 102 62 C100 88 84 100 58 100 C30 100 18 86 18 60 C18 34 32 20 60 20 Z"
      fill="#FF5722"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <path
      d="M32 48 L58 48 C58 60 32 60 32 48 Z"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M38 48 C38 55 52 55 52 48 Z" fill="#0F172A" />

    {/* Right Eye */}
    <path
      d="M64 48 L90 48 C90 60 64 60 64 48 Z"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M70 48 C70 55 84 55 84 48 Z" fill="#0F172A" />
  </svg>
);

/**
 * 5. Flower Splat Blob (Ungu Muda - Adaptasi Baris 1 Kanan)
 */
export const FlowerSplatBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M52 38 C50 10 72 10 68 38 C84 16 102 28 80 48 C108 42 112 64 82 64 C106 78 92 98 70 76 C74 108 50 108 54 78 C36 100 18 86 42 66 C12 68 12 46 40 50 C16 32 32 16 52 38 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M52 38 C50 10 72 10 68 38 C84 16 102 28 80 48 C108 42 112 64 82 64 C106 78 92 98 70 76 C74 108 50 108 54 78 C36 100 18 86 42 66 C12 68 12 46 40 50 C16 32 32 16 52 38 Z"
      fill="#A855F7"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="49"
      cy="58"
      rx="8"
      ry="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="51" cy="58" rx="4.5" ry="7" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="69"
      cy="58"
      rx="8"
      ry="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="71" cy="58" rx="4.5" ry="7" fill="#0F172A" />
  </svg>
);

/**
 * 6. Fluffy Cloud Blob (Biru Kobalt - Adaptasi Baris 2 Kiri)
 */
export const CloudBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M34 40 C28 22 52 16 60 30 C68 14 92 22 86 42 C106 38 112 62 92 68 C108 78 94 100 76 90 C72 108 48 108 46 90 C28 102 14 84 28 72 C10 68 12 44 34 40 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M34 40 C28 22 52 16 60 30 C68 14 92 22 86 42 C106 38 112 62 92 68 C108 78 94 100 76 90 C72 108 48 108 46 90 C28 102 14 84 28 72 C10 68 12 44 34 40 Z"
      fill="#3B82F6"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="48"
      cy="64"
      rx="9"
      ry="14"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="46" cy="64" rx="5" ry="8" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="72"
      cy="64"
      rx="9"
      ry="14"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="70" cy="64" rx="5" ry="8" fill="#0F172A" />
  </svg>
);

/**
 * 7. Splash Amoeba Blob (Toska/Cyan - Adaptasi Baris 2 Ke-2)
 */
export const SplashBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M58 28 C72 12 104 16 96 36 C92 46 78 48 84 58 C92 70 106 82 96 94 C86 104 72 92 66 84 C58 76 64 98 54 104 C40 112 24 100 32 86 C38 76 34 70 24 68 C10 66 10 48 26 48 C38 48 36 38 28 32 C18 22 42 12 58 28 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M58 28 C72 12 104 16 96 36 C92 46 78 48 84 58 C92 70 106 82 96 94 C86 104 72 92 66 84 C58 76 64 98 54 104 C40 112 24 100 32 86 C38 76 34 70 24 68 C10 66 10 48 26 48 C38 48 36 38 28 32 C18 22 42 12 58 28 Z"
      fill="#06B6D4"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="49"
      cy="56"
      rx="7.5"
      ry="13"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="47" cy="56" rx="4" ry="7.5" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="69"
      cy="56"
      rx="7.5"
      ry="13"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <ellipse cx="67" cy="56" rx="4" ry="7.5" fill="#0F172A" />
  </svg>
);

/**
 * 8. Jagged Bush Blob (Hijau Daun - Adaptasi Baris 2 Ke-3)
 */
export const BushBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M58 18 L66 30 L84 20 L82 36 L104 38 L92 52 L106 64 L90 72 L94 86 L80 84 L76 98 L64 88 L52 104 L44 90 L28 94 L32 80 L18 78 L26 66 L14 58 L28 48 L16 36 L36 34 L34 18 L50 28 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
      strokeLinejoin="round"
    />

    {/* Main Body */}
    <path
      d="M58 18 L66 30 L84 20 L82 36 L104 38 L92 52 L106 64 L90 72 L94 86 L80 84 L76 98 L64 88 L52 104 L44 90 L28 94 L32 80 L18 78 L26 66 L14 58 L28 48 L16 36 L36 34 L34 18 L50 28 Z"
      fill="#22C55E"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <circle
      cx="47"
      cy="60"
      r="11"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="45" cy="60" r="6" fill="#0F172A" />

    {/* Right Eye */}
    <circle
      cx="73"
      cy="60"
      r="11"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="71" cy="60" r="6" fill="#0F172A" />
  </svg>
);

/**
 * 9. Arch Runner Blob (Magenta - Adaptasi Baris 2 Ke-4)
 */
export const ArchBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M60 18 C90 18 102 48 98 86 C96 100 84 102 72 100 C62 98 66 84 64 74 C62 64 54 64 50 74 C46 84 46 100 36 102 C22 104 18 92 20 74 C22 42 34 18 60 18 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M60 18 C90 18 102 48 98 86 C96 100 84 102 72 100 C62 98 66 84 64 74 C62 64 54 64 50 74 C46 84 46 100 36 102 C22 104 18 92 20 74 C22 42 34 18 60 18 Z"
      fill="#EC4899"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="49"
      cy="44"
      rx="10"
      ry="11"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="52" cy="44" r="5.5" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="73"
      cy="44"
      rx="10"
      ry="11"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="76" cy="44" r="5.5" fill="#0F172A" />
  </svg>
);

/**
 * 10. Sharp Webbed Blob (Biru Laut - Adaptasi Baris 2 Kanan)
 */
export const WebbedStarBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M42 18 Q64 30 88 18 Q84 48 108 72 Q76 76 60 104 Q46 76 16 82 Q34 62 20 40 Q38 34 42 18 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
      strokeLinejoin="round"
    />

    {/* Main Body */}
    <path
      d="M42 18 Q64 30 88 18 Q84 48 108 72 Q76 76 60 104 Q46 76 16 82 Q34 62 20 40 Q38 34 42 18 Z"
      fill="#0284C7"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <path
      d="M32 52 L56 62 C52 74 34 70 32 52 Z"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <circle cx="46" cy="62" r="4.5" fill="#0F172A" />

    {/* Right Eye */}
    <path
      d="M88 52 L64 62 C68 74 86 70 88 52 Z"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <circle cx="74" cy="62" r="4.5" fill="#0F172A" />
  </svg>
);

/**
 * 11. Acid Drop Blob (Hijau Lime Neon - Mata Besar Kecil Quirky)
 */
export const AcidDropBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M60 14 C82 14 78 42 94 56 C108 68 104 98 78 102 C58 104 52 94 36 98 C16 102 12 74 26 58 C40 42 38 14 60 14 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M60 14 C82 14 78 42 94 56 C108 68 104 98 78 102 C58 104 52 94 36 98 C16 102 12 74 26 58 C40 42 38 14 60 14 Z"
      fill="#A3E635"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye (Giant Googly) */}
    <circle
      cx="46"
      cy="64"
      r="14"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3.5"
    />
    <circle cx="48" cy="62" r="6.5" fill="#0F172A" />

    {/* Right Eye (Small Googly) */}
    <circle
      cx="76"
      cy="60"
      r="9"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3.5"
    />
    <circle cx="74" cy="62" r="4" fill="#0F172A" />
  </svg>
);

/**
 * 12. Peanut Blob (Kuning Elektrik - Mata Juling Goofy)
 */
export const PeanutBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M36 22 C54 12 88 16 94 38 C98 52 80 56 82 66 C86 80 100 94 80 104 C58 112 24 104 20 82 C18 68 36 62 32 50 C28 38 18 32 36 22 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M36 22 C54 12 88 16 94 38 C98 52 80 56 82 66 C86 80 100 94 80 104 C58 112 24 104 20 82 C18 68 36 62 32 50 C28 38 18 32 36 22 Z"
      fill="#FACC15"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="48"
      cy="44"
      rx="10"
      ry="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="53" cy="44" r="5" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="72"
      cy="44"
      rx="10"
      ry="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="67" cy="44" r="5" fill="#0F172A" />
  </svg>
);

/**
 * 13. Crown Monster Blob (Ungu Violet - 3 Tanduk Tumpul)
 */
export const CrownBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M24 30 C24 16 38 18 44 34 C50 14 70 14 76 34 C82 18 96 16 96 30 C104 56 102 96 82 100 C64 104 56 96 38 100 C18 96 16 56 24 30 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M24 30 C24 16 38 18 44 34 C50 14 70 14 76 34 C82 18 96 16 96 30 C104 56 102 96 82 100 C64 104 56 96 38 100 C18 96 16 56 24 30 Z"
      fill="#8B5CF6"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="46"
      cy="66"
      rx="11"
      ry="14"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="46" cy="64" r="6" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="74"
      cy="66"
      rx="11"
      ry="14"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="74" cy="64" r="6" fill="#0F172A" />
  </svg>
);

/**
 * 14. Bean Pop Blob (Merah Rose Neon - Mata Menonjol di Atas)
 */
export const BeanBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M28 44 C46 48 74 48 92 40 C110 32 108 86 84 96 C60 106 24 100 16 76 C10 56 14 40 28 44 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M28 44 C46 48 74 48 92 40 C110 32 108 86 84 96 C60 106 24 100 16 76 C10 56 14 40 28 44 Z"
      fill="#F43F5E"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="44"
      cy="46"
      rx="11"
      ry="15"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3.5"
    />
    <ellipse cx="44" cy="44" rx="5.5" ry="8" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="72"
      cy="46"
      rx="11"
      ry="15"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3.5"
    />
    <ellipse cx="72" cy="44" rx="5.5" ry="8" fill="#0F172A" />
  </svg>
);

/**
 * 15. Cog Splat Blob (Mint Emerald - Mata Wall-Eyed Kiri Kanan)
 */
export const CogBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M46 16 L74 16 L78 32 L98 28 L106 52 L92 64 L102 84 L82 100 L66 88 L54 102 L30 96 L32 78 L14 68 L20 42 L38 40 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
      strokeLinejoin="round"
    />

    {/* Main Body */}
    <path
      d="M46 16 L74 16 L78 32 L98 28 L106 52 L92 64 L102 84 L82 100 L66 88 L54 102 L30 96 L32 78 L14 68 L20 42 L38 40 Z"
      fill="#10B981"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <circle
      cx="44"
      cy="58"
      r="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="39" cy="58" r="5.5" fill="#0F172A" />

    {/* Right Eye */}
    <circle
      cx="76"
      cy="58"
      r="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="81" cy="58" r="5.5" fill="#0F172A" />
  </svg>
);

/**
 * 16. Melting Puddle Blob (Oranye Tangerine - Bentuk Meleleh)
 */
export const PuddleBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M60 22 C84 22 82 52 96 62 C110 72 108 98 88 98 L32 98 C12 98 10 72 24 62 C38 52 36 22 60 22 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M60 22 C84 22 82 52 96 62 C110 72 108 98 88 98 L32 98 C12 98 10 72 24 62 C38 52 36 22 60 22 Z"
      fill="#FB923C"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="48"
      cy="66"
      rx="9.5"
      ry="13"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="48" cy="60" r="5" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="72"
      cy="66"
      rx="9.5"
      ry="13"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="72" cy="60" r="5" fill="#0F172A" />
  </svg>
);

/**
 * 17. Chubby Starfish Blob (Coral Pink - Bintang Sudut Tumpul)
 */
export const StarfishBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M60 14 C68 14 70 36 80 40 C92 44 108 38 106 52 C104 64 86 66 84 76 C82 88 94 104 80 104 C68 104 66 86 56 86 C46 86 42 106 30 102 C18 98 34 80 32 70 C30 60 12 56 14 44 C16 32 38 42 46 36 C54 30 52 14 60 14 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M60 14 C68 14 70 36 80 40 C92 44 108 38 106 52 C104 64 86 66 84 76 C82 88 94 104 80 104 C68 104 66 86 56 86 C46 86 42 106 30 102 C18 98 34 80 32 70 C30 60 12 56 14 44 C16 32 38 42 46 36 C54 30 52 14 60 14 Z"
      fill="#FB7185"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="48"
      cy="58"
      rx="8.5"
      ry="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="50" cy="58" r="4.5" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="70"
      cy="58"
      rx="8.5"
      ry="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="72" cy="58" r="4.5" fill="#0F172A" />
  </svg>
);

/**
 * 18. Wavy Ghost Blob (Biru Langit Cerah - 3 Kaki Gelombang)
 */
export const GhostBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M60 16 C92 16 98 46 98 88 C98 104 82 104 78 90 C74 78 68 78 66 90 C64 104 56 104 54 90 C52 78 46 78 42 90 C38 104 22 104 22 88 C22 46 28 16 60 16 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M60 16 C92 16 98 46 98 88 C98 104 82 104 78 90 C74 78 68 78 66 90 C64 104 56 104 54 90 C52 78 46 78 42 90 C38 104 22 104 22 88 C22 46 28 16 60 16 Z"
      fill="#38BDF8"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="47"
      cy="52"
      rx="9.5"
      ry="13"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="43" cy="52" r="5" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="73"
      cy="52"
      rx="9.5"
      ry="13"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="69" cy="52" r="5" fill="#0F172A" />
  </svg>
);

/**
 * 19. Spiky Diamond Blob (Merah Oranye Menyala - 4 Sudut Tajam)
 */
export const SpikyDiamondBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M60 12 Q74 44 108 60 Q74 76 60 108 Q46 76 12 60 Q46 44 60 12 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
      strokeLinejoin="round"
    />

    {/* Main Body */}
    <path
      d="M60 12 Q74 44 108 60 Q74 76 60 108 Q46 76 12 60 Q46 44 60 12 Z"
      fill="#EF4444"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <ellipse
      cx="48"
      cy="60"
      rx="8.5"
      ry="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="50" cy="60" r="4.5" fill="#0F172A" />

    {/* Right Eye */}
    <ellipse
      cx="72"
      cy="60"
      rx="8.5"
      ry="12"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="70" cy="60" r="4.5" fill="#0F172A" />
  </svg>
);

/**
 * 20. Octo Tentacle Blob (Ungu Indigo Neon - 4 Tentakel Bulat)
 */
export const OctoBlobSvg: React.FC<SvgProps> = ({
  size = 120,
  className = "",
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="mascot"
    className={className}
    style={style}
    {...props}
  >
    {/* Hard Shadow */}
    <path
      d="M60 18 C96 18 104 54 96 78 C106 90 94 106 80 96 C78 108 62 108 60 94 C58 108 42 108 40 96 C26 106 14 90 24 78 C16 54 24 18 60 18 Z"
      fill="#0F172A"
      transform="translate(4, 4)"
    />

    {/* Main Body */}
    <path
      d="M60 18 C96 18 104 54 96 78 C106 90 94 106 80 96 C78 108 62 108 60 94 C58 108 42 108 40 96 C26 106 14 90 24 78 C16 54 24 18 60 18 Z"
      fill="#6366F1"
      stroke="#0F172A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Left Eye */}
    <circle
      cx="46"
      cy="54"
      r="11.5"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="48" cy="52" r="5.5" fill="#0F172A" />

    {/* Right Eye */}
    <circle
      cx="74"
      cy="54"
      r="11.5"
      fill="#FFFFFF"
      stroke="#0F172A"
      strokeWidth="3"
    />
    <circle cx="76" cy="52" r="5.5" fill="#0F172A" />
  </svg>
);