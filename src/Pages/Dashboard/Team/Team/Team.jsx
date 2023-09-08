import { useState } from "react";
import AddTeamModal from "../../../../Components/TeamComponents/AddTeamModal/AddTeamModal";

const Team = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-[100%] mx-auto">
      <div className="top-bar">
        <button className="common-btn" onClick={() => setOpen(true)}>
          Create Team
        </button>
      </div>
      <div className="divider"></div>

      {/* ==== modal ====== */}

      <AddTeamModal open={open} setOpen={setOpen} />
    </section>
  );
};

export default Team;
