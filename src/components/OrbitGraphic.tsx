/** The signature visual, redone as literal pixel art: a blocky 8-bit
 *  orbit of squares standing in for a community connected around a
 *  shared center — STEM (orbital motion) and community (people in
 *  orbit around each other), built entirely out of pixels. */
export function OrbitGraphic() {
  const cell = 20
  const cols = 24
  const grid = (x: number, y: number, w = 1, h = 1) => (
    <rect
      x={x * cell}
      y={y * cell}
      width={w * cell}
      height={h * cell}
    />
  )

  return (
    <svg
      viewBox={`0 0 ${cols * cell} ${cols * cell}`}
      className="w-full h-full pixelated"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      {/* faint pixel orbit ring, drawn as a dotted square path */}
      <g fill="white" opacity="0.18">
        {[3, 5, 7, 9, 11, 13, 15, 17, 19].map((x) => (
          <g key={`h-${x}`}>
            {grid(x, 2)}
            {grid(x, 21)}
          </g>
        ))}
        {[3, 5, 7, 9, 11, 13, 15, 17, 19].map((y) => (
          <g key={`v-${y}`}>
            {grid(2, y)}
            {grid(21, y)}
          </g>
        ))}
      </g>

      {/* core, pixel-blocked pink square-of-squares */}
      <g fill="#ff5cae">
        {grid(10, 10, 4, 4)}
      </g>
      <g fill="#ffb3d9">
        {grid(11, 11, 2, 2)}
      </g>

      {/* orbiting pixel nodes */}
      <g fill="#ffffff">
        {grid(20, 11, 2, 2)}
      </g>
      <g fill="#ff5cae">
        {grid(11, 1, 2, 2)}
      </g>
      <g fill="#ffe2f0">
        {grid(2, 18, 2, 2)}
      </g>
      <g fill="#ffffff">
        {grid(17, 18, 2, 2)}
      </g>
      <g fill="#ff5cae">
        {grid(3, 5, 2, 2)}
      </g>
      <g fill="#ffe2f0">
        {grid(16, 4, 2, 2)}
      </g>

      {/* connecting lines rendered as dotted pixel steps */}
      <g fill="white" opacity="0.35">
        {[13, 15, 17, 19].map((x) => (
          <g key={`l1-${x}`}>{grid(x, 12)}</g>
        ))}
        {[6, 8].map((x) => (
          <g key={`l2-${x}`}>{grid(x, 17)}</g>
        ))}
        {[6, 8].map((x) => (
          <g key={`l3-${x}`}>{grid(x, 6)}</g>
        ))}
      </g>
    </svg>
  )
}