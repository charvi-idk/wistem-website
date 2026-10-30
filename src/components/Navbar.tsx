import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { SU_JOIN_URL } from "../data/mock"

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events" },
  { to: "/committee", label: "Committee" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="WiSTEM logo"
            className="w-9 h-9 rounded-none border-2 border-ink pixelated object-cover"
          />

          <span className="font-display font-semibold text-lg tracking-tight">
            WiSTEM
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-none text-sm font-medium transition-colors border-2 ${
                  isActive
                    ? "bg-iris text-white border-ink"
                    : "text-ink/70 border-transparent hover:text-ink hover:border-ink hover:bg-lilac/50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Join button */}
        <div className="hidden lg:block">
          <a
            href={SU_JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-none border-2 border-ink bg-bloom text-white text-sm font-medium px-5 py-2.5 hover:bg-iris-dark transition-colors pixel-shadow-sm"
          >
            Join WiSTEM
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-none border-2 border-ink hover:bg-lilac/50"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="lg:hidden border-t-2 border-ink bg-cream px-5 py-4 flex flex-col gap-1">

          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-none text-sm font-medium border-2 ${
                  isActive
                    ? "bg-iris text-white border-ink"
                    : "text-ink/70 border-transparent"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Join button */}
          <a
            href={SU_JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center rounded-none border-2 border-ink bg-bloom text-white text-sm font-medium px-5 py-2.5 pixel-shadow-sm"
          >
            Join WiSTEM
          </a>

        </nav>
      )}
    </header>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      shapeRendering="crispEdges"
    >
      {open ? (
        <path
          d="M5 5L15 15M15 5L5 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      ) : (
        <>
          <path
            d="M3 6H17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M3 10H17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M3 14H17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </>
      )}
    </svg>
  )
}