import { Link } from 'react-router-dom';

const Reporting = () => {
  return (
    <div className="bg-background text-on-background min-h-screen p-lg md:p-xl flex flex-col items-center justify-center">
      <span className="material-symbols-outlined text-[64px] text-primary mb-md">analytics</span>
      <h1 className="font-headline-lg text-headline-lg font-bold mb-sm">Reporting & Analytics</h1>
      <p className="text-secondary font-body-md text-center max-w-md mb-lg">
        This is a placeholder for the Reporting page where you'll see charts, metrics, and team performance stats.
      </p>
      <Link to="/dashboard" className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Reporting;
