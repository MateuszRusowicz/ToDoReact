import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStratAddProject }) {
  return (
    <div className="mt-2 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">
        no project selected
      </h2>
      <p className="text-stone-400 mb-4">
        select a project or create a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStratAddProject}>create new project</Button>
      </p>
    </div>
  );
}
