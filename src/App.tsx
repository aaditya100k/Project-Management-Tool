import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import Dashboard from './pages/Dashboard';
import KanbanBoard from './pages/KanbanBoard';
import TaskDetails from './pages/TaskDetails';
import Inbox from './pages/Inbox';
import Reporting from './pages/Reporting';
import Settings from './pages/Settings';
import CreateProject from './pages/CreateProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kanban" element={<KanbanBoard />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/create-project" element={<CreateProject />} />
        {/* Default route */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
