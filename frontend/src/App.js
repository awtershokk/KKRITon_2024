import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/common/Login";
import Registration from "./pages/common/Register";
import IndexOrganizer from "./pages/organizer/IndexOrganizer";
import IndexPlayer from "./pages/player/IndexPlayer";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Registration />} />

                <Route path="/organizer/*" element={<OrganizerRoutes />} />
                <Route path="/player/*" element={<PlayerRoutes />} />
            </Routes>
        </Router>
    );
}

function OrganizerRoutes() {
    return (
        <Routes>
            <Route path="/index" element={<IndexOrganizer />} />
        </Routes>
    );
}

function PlayerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<IndexPlayer />} />
        </Routes>
    );
}
