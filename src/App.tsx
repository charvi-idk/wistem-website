import { Routes, Route, Navigate } from "react-router-dom"
import { RootLayout } from "./components/RootLayout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Events } from "./pages/Events"
import { EventDetails } from "./pages/EventDetails"
import { ResourcesPage } from "./pages/ResourcesPage"
import { CommitteePage } from "./pages/CommitteePage"
import { Join } from "./pages/Join"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
