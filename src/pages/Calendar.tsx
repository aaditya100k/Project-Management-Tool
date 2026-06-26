import { Link } from 'react-router-dom';

const Calendar = () => {
  return (
    <div className="bg-background text-on-background min-h-screen p-lg md:p-xl flex flex-col items-center justify-center">
      <span className="material-symbols-outlined text-[64px] text-primary mb-md">calendar_month</span>
      <h1 className="font-headline-lg text-headline-lg font-bold mb-sm">Calendar View</h1>
      <p className="text-secondary font-body-md text-center max-w-md mb-lg">
        This is a placeholder for the Calendar where you can view tasks by their due dates.
      </p>
      <Link to="/dashboard" className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Calendar;
