import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* SideNavBar */}
      <aside className="flex flex-col h-screen p-md gap-sm bg-surface w-64 fixed left-0 top-0 border-r border-outline-variant z-40 hidden md:flex">
        <div className="mb-lg">
          <h1 className="text-title-lg font-title-lg font-bold text-primary">ProjectFlow</h1>
          <p className="text-label-md font-label-md text-secondary">Enterprise Workspace</p>
        </div>
        <nav className="flex-1 space-y-xs">
          <Link to="/dashboard" className="flex items-center gap-md p-sm text-secondary hover:bg-surface-container-high rounded-lg cursor-pointer">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/kanban" className="flex items-center gap-md p-sm bg-secondary-container text-on-secondary-container font-semibold rounded-lg cursor-pointer">
            <span className="material-symbols-outlined">assignment</span>
            <span>My Tasks</span>
          </Link>
          <Link to="/kanban" className="flex items-center gap-md p-sm text-secondary hover:bg-surface-container-high rounded-lg cursor-pointer">
            <span className="material-symbols-outlined">folder_shared</span>
            <span>Projects</span>
          </Link>
        </nav>
      </aside>

      {/* TopAppBar */}
      <header className="flex items-center justify-between px-lg w-full h-16 sticky top-0 z-30 bg-surface border-b border-outline-variant shadow-sm md:ml-64 w-[calc(100%-16rem)]">
        <div className="flex items-center gap-lg">
          <h2 className="text-title-lg font-title-lg font-black text-primary">ProjectFlow</h2>
          <div className="hidden lg:flex items-center gap-md">
            <Link to="/dashboard" className="text-secondary hover:text-primary transition-colors text-label-md font-label-md">Overview</Link>
            <Link to="/kanban" className="text-primary border-b-2 border-primary pb-1 text-label-md font-label-md">Board</Link>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="md:ml-64 p-lg max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
          
          {/* Left Column: Core Task Details */}
          <div className="lg:col-span-8 space-y-lg">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl shadow-sm">
              <div className="flex justify-between items-start mb-md">
                <div className="flex items-center gap-sm px-md py-xs bg-secondary-container text-on-secondary-container rounded-full w-fit">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span className="text-label-md font-label-md">In Progress</span>
                </div>
                <div className="flex gap-xs">
                  <Link to="/kanban" className="p-xs hover:bg-surface-container-high rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-outline">close</span>
                  </Link>
                </div>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-md">Task {id}: Finalize UI Kit</h1>
              <div className="prose prose-sm text-secondary mb-xl">
                <p className="font-body-lg text-body-lg">
                  The final sprint for the ProjectFlow design system requires a comprehensive audit of all existing components.
                </p>
                <ul className="mt-md space-y-xs list-disc list-inside font-body-md text-body-md">
                  <li>Review all typography tokens (H1-H6)</li>
                  <li>Standardize border radii to 8px across all cards</li>
                  <li>Verify Material Symbols integration</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-sm pt-md border-t border-outline-variant">
                <span className="px-md py-xs rounded-lg bg-primary-container/10 text-primary font-label-md text-label-md border border-primary/20">Design System</span>
                <span className="px-md py-xs rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md">High Priority</span>
              </div>
            </div>

            {/* Comment Section */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="px-xl py-lg border-b border-outline-variant flex items-center justify-between">
                <h3 className="font-title-lg text-title-lg text-on-surface">Activity & Comments</h3>
              </div>
              <div className="p-xl space-y-lg">
                <div className="flex gap-md">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">
                    SC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-xs">
                      <span className="font-label-md text-label-md font-bold">Sarah Chen</span>
                      <span className="text-label-sm text-outline">2 hours ago</span>
                    </div>
                    <div className="bg-surface-container-low p-md rounded-xl rounded-tl-none font-body-md text-on-surface-variant">
                      I've just uploaded the updated button states. Please take a look!
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Box */}
              <div className="p-xl bg-surface-container border-t border-outline-variant">
                <div className="flex gap-md">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                    You
                  </div>
                  <div className="flex-1 space-y-sm">
                    <textarea 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full h-24 p-md rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary outline-none bg-surface-container-lowest font-body-md resize-none shadow-inner" 
                      placeholder="Add a comment..."></textarea>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => { if(comment) { alert('Comment added!'); setComment(''); } }}
                        className="bg-primary text-white px-xl py-xs rounded-lg font-label-md hover:opacity-90 transition-all">
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-lg">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
              <h4 className="font-title-lg text-title-lg text-on-surface mb-lg">Details</h4>
              <div className="space-y-md">
                <div className="flex flex-col gap-xs">
                  <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Due Date</span>
                  <div className="flex items-center gap-md p-sm bg-surface-container-low rounded-lg">
                    <span className="material-symbols-outlined text-outline">calendar_today</span>
                    <span className="font-body-md">October 24, 2026</span>
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Priority</span>
                  <div className="flex items-center gap-md p-sm bg-surface-container-low rounded-lg">
                    <span className="material-symbols-outlined text-error">priority_high</span>
                    <span className="font-body-md">Urgent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default TaskDetails;
