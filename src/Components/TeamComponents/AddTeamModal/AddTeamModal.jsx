/* eslint-disable react/prop-types */
import { Input, Modal, Select } from "antd";

const AddTeamModal = ({ open, setOpen }) => {
  const teamMemberOption = [
    { value: "User 1", label: "User 1" },
    { value: "User 2", label: "User 2" },
    { value: "User 3", label: "User 3" },
    { value: "User 4", label: "User 4" },
  ];

  const handelTeamMember = (value) => {
    console.log(`selected ${value}`);
    
  };

  return (
    <div>
      <>
        <Modal
          title="Create Team"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={600}
          footer={null}
        >
          <div className="flex flex-col gap-4">
            <Input placeholder="Team Name" />

            <Select
              mode="tags"
              style={{
                width: "100%",
              }}
              placeholder="Assign To"
              onChange={handelTeamMember}
              options={teamMemberOption}
            />

            <button className="common-btn">
                <span className="text-white">Create Team</span>
            </button>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default AddTeamModal;
