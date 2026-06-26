import { Link, useNavigate } from 'react-router-dom';

const CreateProject = () => {
  const navigate = useNavigate();

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Project created successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="bg-background text-on-background min-h-screen p-lg md:p-xl flex items-center justify-center">
      <div className="bg-surface-container-low border border-outline-variant rounded-xl p-xl max-w-lg w-full shadow-lg">
        <h1 className="font-headline-md text-headline-md font-bold mb-lg">Create New Project</h1>
        <form onSubmit={handleCreate} className="space-y-md">
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface-variant">Project Name</label>
            <input required type="text" className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary outline-none bg-surface" placeholder="e.g. Website Redesign" />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface-variant">Description</label>
            <textarea className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary outline-none bg-surface resize-none h-24" placeholder="What is this project about?"></textarea>
          </div>
          <div className="flex justify-end gap-sm pt-md">
            <Link to="/dashboard" className="px-lg py-sm text-secondary hover:bg-surface-container rounded-lg font-label-md">Cancel</Link>
            <button type="submit" className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
