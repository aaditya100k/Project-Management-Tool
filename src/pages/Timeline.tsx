import { Link } from 'react-router-dom';

const Timeline = () => {
  return (
    <div className="bg-background text-on-background min-h-screen p-lg md:p-xl flex flex-col items-center justify-center">
      <span className="material-symbols-outlined text-[64px] text-primary mb-md">timeline</span>
      <h1 className="font-headline-lg text-headline-lg font-bold mb-sm">Project Timeline</h1>
      <p className="text-secondary font-body-md text-center max-w-md mb-lg">
        This is a placeholder for the Gantt chart and Timeline view of your projects.
      </p>
      <Link to="/dashboard" className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Timeline;
