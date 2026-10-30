import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/mock"

export function Footer() {
  return (
    <footer className="bg-violet-deep text-white/90 mt-24 border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src={logo}
              alt="WiSTEM logo"
              className="w-8 h-8 rounded-none border-2 border-white/30 pixelated object-cover"
            />
            <span className="font-display font-semibold text-lg">WiSTEM</span>
          </div>
          <p className="text-sm text-white/60 max-w-xs">
            The Women in STEM Society at Royal Holloway, University of London. Student-run and open to all.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-white/40 mb-3">Explore</p>
            <ul className="space-y-2">
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
              <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-white/40 mb-3">Society</p>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/committee" className="hover:text-white">Committee</Link></li>
              <li><Link to="/join" className="hover:text-white">Join Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Get Involved</Link></li>
            </ul>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-white/40 mb-3">
            Stay in the loop
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-white">{INSTAGRAM_HANDLE} on Instagram</a></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white break-all">{CONTACT_EMAIL}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} WiSTEM Society. Built by students, for students.
      </div>
    </footer>
  )
}