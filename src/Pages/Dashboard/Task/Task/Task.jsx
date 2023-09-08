import { useState } from "react";
import AddTaskModal from "../../../../Components/TaskComponents/AddTaskModal/AddTaskModal";

const AddTask = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  return (
    <section className="w-[100%] mx-auto">
      <div className="top-bar">
        <button className="common-btn" onClick={() => setTaskOpen(true)}>
          Add New Task
        </button>
      </div>
      <div className="divider"></div>

      {/* ==== modal ====== */}

      <AddTaskModal taskOpen={taskOpen} setTaskOpen={setTaskOpen} />
    </section>
  );
};

export default AddTask;
