import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initialTasks = {
  todo: [
    { id: 1, title: 'Redesign User Dashboard', desc: 'Revamp the main dashboard to include bento grid layouts.', tag: 'Feature', priority: 'Medium' },
    { id: 2, title: 'API Integration Auth', desc: 'Fix the OAuth callback loop occurring on mobile devices.', tag: 'Priority', priority: 'High' }
  ],
  inProgress: [
    { id: 3, title: 'Database Indexing', desc: 'Running migration scripts for the legacy workspace data structures.', tag: 'Optimization', priority: 'Medium' }
  ],
  review: [
    { id: 4, title: 'Q3 Roadmap Presentation', desc: 'Deck is ready for internal review before the all-hands meeting.', tag: 'Marketing', priority: 'Low' }
  ],
  done: [
    { id: 5, title: 'Brand Asset Library', desc: 'All logos, color tokens, and font assets are now organized.', tag: 'Completed', priority: 'None' }
  ]
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const navigate = useNavigate();

  const handleTaskClick = (taskId: number) => {
    navigate(`/task/${taskId}`);
  };

  const handleAddTask = () => {
    const newTaskTitle = prompt('Enter task title:');
    if (!newTaskTitle) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      desc: 'New task description added by user.',
      tag: 'New',
      priority: 'Low'
    };
    setTasks(prev => ({
      ...prev,
      todo: [...prev.todo, newTask]
    }));
  };

  return (
    <div className="bg-surface text-on-surface overflow-hidden flex h-screen">
      {/* Side Navigation Shell */}
      <aside className="flex flex-col h-screen p-md gap-sm bg-surface w-64 border-r border-outline-variant z-40 hidden md:flex">
        <div className="flex items-center gap-sm mb-lg">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-body-lg">folder_shared</span>
          </div>
          <div>
            <h1 className="text-title-lg font-title-lg font-bold text-primary">ProjectFlow</h1>
            <p className="font-label-md text-label-md text-secondary">Enterprise Workspace</p>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-xs">
          <Link to="/dashboard" className="flex items-center gap-md p-sm text-secondary hover:bg-surface-container-high rounded-lg transition-colors duration-200">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md text-body-md">Dashboard</span>
          </Link>
          <Link to="/kanban" className="flex items-center gap-md p-sm bg-secondary-container text-on-secondary-container font-semibold rounded-lg transition-colors duration-200">
            <span className="material-symbols-outlined">folder_shared</span>
            <span className="font-body-md text-body-md">Projects</span>
          </Link>
        </nav>
        <div className="mt-auto flex flex-col gap-xs">
          <Link to="/create-project" className="bg-primary-container text-on-primary-container py-sm px-md rounded-lg font-title-lg text-body-md font-bold mb-md hover:opacity-90 transition-opacity text-center">
            Create Project
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top App Bar */}
        <header className="h-16 shrink-0 w-full bg-surface border-b border-outline-variant shadow-sm flex items-center justify-between px-lg">
          <div className="flex items-center gap-lg">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-outline">
                <span className="material-symbols-outlined text-body-lg">search</span>
              </span>
              <input className="pl-10 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-body-md w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Search in Board..." type="text"/>
            </div>
            <nav className="hidden md:flex items-center gap-md">
              <Link to="/dashboard" className="font-label-md text-label-md text-secondary hover:text-primary transition-colors">Overview</Link>
              <span className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1">Board</span>
            </nav>
          </div>
          <div className="flex items-center gap-md">
            <button onClick={() => alert('Invite member feature coming soon!')} className="bg-primary-container text-on-primary-container px-md py-1.5 rounded-lg font-label-md text-label-md font-semibold hover:opacity-90 transition-opacity">
              Invite
            </button>
            <div className="flex items-center gap-sm border-l border-outline-variant pl-md ml-sm">
              <button onClick={() => alert('You have 0 new notifications')} className="material-symbols-outlined text-secondary hover:text-primary transition-colors">notifications</button>
            </div>
          </div>
        </header>

        {/* Board Section */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden kanban-container p-lg bg-surface-container-low">
          <div className="flex gap-lg h-full items-start min-w-max pb-4">
            
            {/* Column: To Do */}
            <div className="w-80 flex flex-col h-full max-h-full">
              <div className="flex items-center justify-between mb-md px-sm shrink-0">
                <div className="flex items-center gap-sm">
                  <h3 className="font-title-lg text-title-lg font-bold">To Do</h3>
                  <span className="bg-surface-container-highest text-secondary px-2 py-0.5 rounded-full text-label-sm font-label-sm">{tasks.todo.length}</span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto space-y-md pr-sm pb-4">
                {tasks.todo.map(task => (
                  <div key={task.id} onClick={() => handleTaskClick(task.id)} className="glass-card p-md rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-outline-variant bg-white/70">
                    <div className="flex justify-between items-start mb-sm">
                      <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-label-sm font-label-sm">{task.tag}</span>
                    </div>
                    <h4 className="font-body-lg text-body-lg font-semibold mb-sm text-on-surface">{task.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-md line-clamp-2">{task.desc}</p>
                  </div>
                ))}
                <button onClick={handleAddTask} className="w-full py-sm border-2 border-dashed border-outline-variant rounded-xl text-secondary font-label-md flex items-center justify-center gap-sm hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-body-md">add</span> Add Task
                </button>
              </div>
            </div>

            {/* Column: In Progress */}
            <div className="w-80 flex flex-col h-full max-h-full">
              <div className="flex items-center justify-between mb-md px-sm shrink-0">
                <div className="flex items-center gap-sm">
                  <h3 className="font-title-lg text-title-lg font-bold">In Progress</h3>
                  <span className="bg-primary-container text-white px-2 py-0.5 rounded-full text-label-sm font-label-sm">{tasks.inProgress.length}</span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto space-y-md pr-sm pb-4">
                {tasks.inProgress.map(task => (
                  <div key={task.id} onClick={() => handleTaskClick(task.id)} className="glass-card p-md rounded-xl shadow-sm border-l-4 border-primary bg-white/70 border border-outline-variant">
                    <div className="flex justify-between items-start mb-sm">
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-label-sm font-label-sm">{task.tag}</span>
                    </div>
                    <h4 className="font-body-lg text-body-lg font-semibold mb-sm text-on-surface">{task.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-md">{task.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column: Done */}
            <div className="w-80 flex flex-col h-full max-h-full">
              <div className="flex items-center justify-between mb-md px-sm shrink-0">
                <div className="flex items-center gap-sm">
                  <h3 className="font-title-lg text-title-lg font-bold">Done</h3>
                  <span className="bg-surface-container-highest text-secondary px-2 py-0.5 rounded-full text-label-sm font-label-sm">{tasks.done.length}</span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto space-y-md pr-sm pb-4 opacity-70">
                {tasks.done.map(task => (
                  <div key={task.id} onClick={() => handleTaskClick(task.id)} className="glass-card p-md rounded-xl shadow-sm border-l-4 border-green-500 bg-white/70 border border-outline-variant">
                    <div className="flex justify-between items-start mb-sm">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-label-sm font-label-sm">Completed</span>
                      <span className="material-symbols-outlined text-green-600 text-body-md">check_circle</span>
                    </div>
                    <h4 className="font-body-lg text-body-lg font-semibold mb-sm text-on-surface line-through">{task.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-md">{task.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default KanbanBoard;
