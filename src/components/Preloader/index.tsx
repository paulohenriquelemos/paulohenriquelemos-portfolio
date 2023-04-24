export function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen bg-backgroundLoader animate-dashLoaderBackground">
      <div className="w-[100px] relative animate-dashLoaderScale pointer-events-none">
        <span className="text-primary text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-dashLoaderText opacity-0">
          PH
        </span>
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                id="Shape"
                stroke="#64FFDA"
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={270}
                strokeDashoffset={270}
                points="39 0 0 22 0 67 39 90 78 68 78 23"
                className="animate-dashLoaderStroke"
              ></polygon>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
