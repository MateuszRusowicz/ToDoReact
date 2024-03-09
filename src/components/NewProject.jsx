import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onSelect }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const due = useRef();

  function handleNewProject() {
    let enteredTitle = title.current.value;
    let enteredDescription = description.current.value;
    let enteredDue = due.current.value;
    if (enteredTitle.trim() === "" || enteredDescription.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDue,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">
          invalid input
        </h2>
        <p>please make sure you provide a valid input</p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onSelect}
              className="text-stone-800 hover:text-stone-950"
            >
              cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleNewProject}
              className=" px-6 pu-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={due} label="Due Date" />
        </div>
      </div>
    </>
  );
}
