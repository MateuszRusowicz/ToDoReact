import Tasks from "./Tasks";

export default function SelectedProject({
  projects,
  onDelete,
  onAddTask,
  onDeleteTask,
  task,
}) {
  const formatDate = new Date(projects.dueDate).toLocaleDateString("en-EN");
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex item-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {" "}
            {projects.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {projects.description}
        </p>
      </header>
      <Tasks tasks={task} onDeleteTask={onDeleteTask} onAddTask={onAddTask} />
    </div>
  );
}
