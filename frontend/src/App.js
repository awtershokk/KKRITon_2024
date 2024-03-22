import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/common/Login";
import Registration from "./pages/common/Register";
import IndexOrganizer from "./pages/organizer/IndexOrganizer";
import IndexPlayer from "./pages/player/IndexPlayer";
import CreateTournament from "./pages/organizer/CreateTournament";
import Tournaments from "./pages/common/Tournaments";
import CreateOrder from "./pages/player/CreateOrder";
import Team from "./pages/common/Team";
import MyProfile from "./pages/common/MyProfile";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/tournaments" element={<Tournaments />} />
                <Route path="/organizer/*" element={<OrganizerRoutes />} />
                <Route path="/player/*" element={<PlayerRoutes />} />
                <Route path="/team" element={<Team />} />
                <Route path="/profile" element={<MyProfile />} />
            </Routes>
        </Router>
    );
}

function OrganizerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<IndexOrganizer />} />
            <Route path="/create_tournament" element={<CreateTournament />} />
        </Routes>
    );
}

function PlayerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<IndexPlayer />} />
            <Route path="/create_order" element={<CreateOrder />} />
        </Routes>
    );
}
