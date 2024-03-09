import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && <p className="text-stone-800 my-4">no tasks</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((t) => (
            <li className="flex justify-between my-4" key={t.id}>
              <span>{t.text}</span>
              <button
                onClick={() => onDeleteTask(t.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
