import { Link, useNavigate } from 'react-router-dom';

const Invite = () => {
  const navigate = useNavigate();

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Invitation sent successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="bg-background text-on-background min-h-screen p-lg md:p-xl flex items-center justify-center">
      <div className="bg-surface-container-low border border-outline-variant rounded-xl p-xl max-w-lg w-full shadow-lg">
        <h1 className="font-headline-md text-headline-md font-bold mb-lg">Invite Members</h1>
        <form onSubmit={handleInvite} className="space-y-md">
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface-variant">Email Address</label>
            <input required type="email" className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary outline-none bg-surface" placeholder="colleague@company.com" />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface-variant">Role</label>
            <select className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary outline-none bg-surface">
              <option>Member</option>
              <option>Admin</option>
              <option>Viewer</option>
            </select>
          </div>
          <div className="flex justify-end gap-sm pt-md">
            <Link to="/dashboard" className="px-lg py-sm text-secondary hover:bg-surface-container rounded-lg font-label-md">Cancel</Link>
            <button type="submit" className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90">Send Invite</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invite;
