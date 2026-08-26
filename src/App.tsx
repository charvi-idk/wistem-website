import { Routes, Route } from "react-router-dom"
import { RootLayout } from "./components/RootLayout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Events } from "./pages/Events"
import { EventDetails } from "./pages/EventDetails"
import { CalendarPage } from "./pages/CalendarPage"
import { OpportunitiesPage } from "./pages/OpportunitiesPage"
import { ResourcesPage } from "./pages/ResourcesPage"
import { CommitteePage } from "./pages/CommitteePage"
import { Join } from "./pages/Join"
import { Contact } from "./pages/Contact"
import { Dashboard } from "./pages/Dashboard"

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
