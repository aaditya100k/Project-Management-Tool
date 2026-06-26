import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-background text-on-background min-h-screen overflow-x-hidden">
      {/* SideNavBar Shell */}
      <aside className={`flex flex-col h-screen p-md gap-sm bg-surface dark:bg-surface-dim w-64 fixed left-0 top-0 border-r border-outline-variant dark:border-outline z-40 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} id="sidebar">
        <div className="flex items-center gap-sm mb-lg px-xs">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined">rocket_launch</span>
          </div>
          <div>
            <h1 className="text-title-lg font-title-lg font-bold text-primary dark:text-primary-fixed">ProjectFlow</h1>
            <p className="font-body-md text-label-md text-secondary opacity-70">Enterprise Workspace</p>
          </div>
        </div>
        <Link to="/create-project" className="bg-primary text-on-primary flex items-center justify-center gap-sm py-md rounded-lg font-semibold active:scale-95 transition-transform mb-md">
          <span className="material-symbols-outlined">add</span>
          Create Project
        </Link>
        <nav className="flex-1 flex flex-col gap-xs overflow-y-auto">
          {/* Active Tab: Dashboard */}
          <Link to="/dashboard" className="flex items-center gap-sm px-md py-sm bg-secondary-container dark:bg-secondary-fixed-dim text-on-secondary-container dark:text-on-secondary-fixed font-semibold rounded-lg transition-colors duration-200">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md">Dashboard</span>
          </Link>
          <Link to="/kanban" className="flex items-center gap-sm px-md py-sm text-secondary dark:text-secondary-fixed hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-lg transition-colors duration-200">
            <span className="material-symbols-outlined">assignment</span>
            <span className="font-body-md">My Tasks</span>
          </Link>
          <Link to="/kanban" className="flex items-center gap-sm px-md py-sm text-secondary dark:text-secondary-fixed hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-lg transition-colors duration-200">
            <span className="material-symbols-outlined">folder_shared</span>
            <span className="font-body-md">Projects</span>
          </Link>
          <Link to="/inbox" className="flex items-center gap-sm px-md py-sm text-secondary dark:text-secondary-fixed hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-lg transition-colors duration-200">
            <span className="material-symbols-outlined">inbox</span>
            <span className="font-body-md">Inbox</span>
            <span className="ml-auto bg-error text-on-error text-[10px] px-1.5 py-0.5 rounded-full">4</span>
          </Link>
          <Link to="/reporting" className="flex items-center gap-sm px-md py-sm text-secondary dark:text-secondary-fixed hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-lg transition-colors duration-200">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-body-md">Reporting</span>
          </Link>
        </nav>
        <div className="mt-auto pt-md border-t border-outline-variant flex flex-col gap-xs">
          <Link to="/settings" className="flex items-center gap-sm px-md py-sm text-secondary hover:bg-surface-container-high rounded-lg">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md">Settings</span>
          </Link>
          <Link to="/login" className="flex items-center gap-sm px-md py-sm text-secondary hover:bg-surface-container-high rounded-lg">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-md">Logout</span>
          </Link>
          <div className="flex items-center gap-sm p-sm mt-sm">
            <img className="w-8 h-8 rounded-full border border-outline-variant" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_QuVSeRTkCoOkDO1LhAX2pvqIa_AfzGP-5chuHXbFHUG-_KgMPeHJTBhbncDwX57263cq7Wiu_SLbQmlZIxTvM56JhGA0wR1Lc2i5HvsI7RvqF_vyboVQjAOvNE0ru-yNCGKcqVim7qapTdsPejgfW0wpM4gJsiTOFPvocVW7gtT414OCbwUxQOIW59yvTOT7qNl3nmAk4_Okl5IdIc7flogq1aVW5rsWsUsMHkQ3fB-ntxw-43izED5foBc4fb1AFftw5_PxbqQ"/>
            <div className="flex-1 overflow-hidden">
              <p className="font-body-md text-on-surface truncate font-semibold">Alex Rivera</p>
              <p className="text-label-md text-secondary truncate">Workspace Admin</p>
            </div>
            <span className="material-symbols-outlined text-secondary text-sm">unfold_more</span>
          </div>
        </div>
      </aside>

      {/* Main Content Shell */}
      <main className="ml-0 md:ml-64 flex flex-col min-h-screen transition-all duration-300">
        {/* TopAppBar */}
        <header className="h-16 sticky top-0 z-30 w-full bg-surface/80 backdrop-blur-md flex items-center justify-between px-lg border-b border-outline-variant shadow-sm">
          <div className="flex items-center gap-lg">
            <button className="md:hidden p-sm text-on-surface" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="hidden lg:flex items-center bg-surface-container rounded-full px-md py-sm w-96 border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mr-sm">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-body-md w-full p-0 text-on-surface-variant outline-none" placeholder="Search projects or tasks..." type="text"/>
              <span className="text-label-md text-secondary/50 font-mono">⌘K</span>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <nav className="hidden md:flex items-center gap-lg mr-md">
              <Link to="/dashboard" className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-label-md text-label-md">Overview</Link>
              <Link to="/kanban" className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors font-label-md text-label-md">Board</Link>
              <a className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors font-label-md text-label-md" href="#">Timeline</a>
              <a className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors font-label-md text-label-md" href="#">Calendar</a>
            </nav>
            <div className="flex items-center gap-sm">
              <button onClick={() => alert('Invite member feature coming soon!')} className="bg-primary text-on-primary px-lg py-sm rounded-lg font-semibold active:opacity-80 transition-opacity flex items-center gap-xs">
                Invite
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Canvas */}
        <div className="p-lg md:p-xl max-w-7xl mx-auto w-full">
          <div className="mb-xl flex items-end justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Good morning, Alex</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Here's what's happening across your active projects today.</p>
            </div>
            <div className="flex items-center gap-sm bg-surface-container-low p-xs rounded-lg border border-outline-variant">
              <button className="px-md py-sm bg-surface rounded-md shadow-sm text-label-md font-semibold text-primary">Last 7 days</button>
              <button className="px-md py-sm text-label-md font-semibold text-secondary hover:bg-surface-container-high rounded-md">Last 30 days</button>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-5">
            {/* My Tasks Summary - spans 4 columns */}
            <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-lg">
              <div className="flex items-center justify-between mb-lg">
                <h3 className="font-title-lg text-title-lg">My Tasks</h3>
                <Link to="/kanban" className="text-primary font-label-md">View All</Link>
              </div>
              <div className="space-y-md">
                <Link to="/kanban" className="flex items-center gap-md group cursor-pointer">
                  <div className="w-6 h-6 rounded border-2 border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-primary">check</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-md font-medium text-on-surface">Update Q4 Budget Sheets</p>
                    <p className="text-label-md text-secondary">Due today • Finance</p>
                  </div>
                  <span className="text-label-md px-2 py-0.5 rounded bg-error-container text-on-error-container">High</span>
                </Link>
                <div className="pt-sm">
                  <Link to="/kanban" className="w-full py-sm border-2 border-dashed border-outline-variant rounded-lg text-secondary font-label-md hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-xs">
                    <span className="material-symbols-outlined text-sm">add</span> Add New Task
                  </Link>
                </div>
              </div>
            </div>

            {/* Active Projects Cards */}
            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center justify-between mb-md">
                <h3 className="font-title-lg text-title-lg">Active Projects</h3>
                <div className="flex gap-sm">
                  <button className="p-xs rounded hover:bg-surface-container-high"><span className="material-symbols-outlined">grid_view</span></button>
                </div>
              </div>
              
              <Link to="/kanban" className="bg-primary border-primary rounded-xl shadow-xl p-lg flex flex-col gap-md relative overflow-hidden text-on-primary block">
                <div className="flex items-start justify-between relative z-10">
                  <div className="p-sm rounded-lg bg-white/20">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <button className="text-white/70 hover:text-white">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </button>
                </div>
                <div className="relative z-10">
                  <h4 className="font-title-lg text-title-lg mb-xs">Mobile App v2.0</h4>
                  <p className="text-body-md text-white/80 line-clamp-2">Complete redesign and framework migration of the flagship mobile application.</p>
                </div>
                <div className="pt-md border-t border-white/20 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-xs text-white/80 font-label-md">
                    <span className="material-symbols-outlined text-[16px]">task_alt</span>
                    156/158 Tasks
                  </div>
                  <div className="w-24 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[98%]"></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* FAB for quick actions on mobile */}
      <button onClick={() => alert('Add feature coming soon!')} className="md:hidden fixed bottom-lg right-lg w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-50">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default Dashboard;
