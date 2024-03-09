import Button from "./Button";

export default function ProjectSidebar({
  onSelectProject,
  onStratAddProject,
  projects,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStratAddProject}>+ add Project</Button>
        <ul>
          {projects.map((p) => {
            let cssCl =
              "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
            if (projects.id === selectedProjectId) {
              cssCl += " text-stone-200 bg-stone-800";
            }
            return (
              <li key={p.id}>
                <button onClick={() => onSelectProject(p.id)} className={cssCl}>
                  {p.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
