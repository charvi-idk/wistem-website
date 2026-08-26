import { Link } from "react-router-dom"
import { NewsletterForm } from "./NewsletterForm"
import logo from "../assets/logo.png"

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
            A student-run society empowering women and non-binary students in STEM, one event at a time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-white/40 mb-3">Explore</p>
            <ul className="space-y-2">
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
              <li><Link to="/calendar" className="hover:text-white">Calendar</Link></li>
              <li><Link to="/opportunities" className="hover:text-white">Opportunities</Link></li>
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
          <NewsletterForm dark />
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} WiSTEM Society. Built by students, for students.
      </div>
    </footer>
  )
}