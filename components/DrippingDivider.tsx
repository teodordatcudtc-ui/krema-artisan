interface DrippingDividerProps {
  color?: string;
  className?: string;
  height?: number;
}

const drops: [number, number, number][] = [
  [72, 18, 52],
  [155, 14, 38],
  [248, 20, 64],
  [342, 15, 44],
  [438, 12, 36],
  [528, 21, 60],
  [622, 16, 42],
  [718, 13, 70],
  [812, 19, 40],
  [907, 22, 55],
  [1001, 14, 38],
  [1092, 17, 65],
  [1184, 20, 48],
  [1278, 15, 36],
  [1368, 18, 53],
];

export default function DrippingDivider({
  color = '#c58e3f',
  className = '',
  height = 88,
}: DrippingDividerProps) {
  const base = 22;

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        focusable="false"
      >
        {/* Solid top strip */}
        <rect x="0" y="0" width="1440" height={base} fill={color} />

        {/* Drip drops */}
        {drops.map(([cx, w, h], i) => {
          const stemBottom = base + h * 0.62;
          const tipY = base + h;
          return (
            <path
              key={i}
              d={`M${cx - w / 2},${base} L${cx - w / 2},${stemBottom} Q${cx},${tipY} ${cx + w / 2},${stemBottom} L${cx + w / 2},${base} Z`}
              fill={color}
            />
          );
        })}
      </svg>
    </div>
  );
}
