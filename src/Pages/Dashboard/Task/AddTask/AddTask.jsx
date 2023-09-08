import { DatePicker, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const AddTask = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const paiorityLavelOptions = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
    { value: "Urgent", label: "Urgent" },
    { value: "Important", label: "Important" },
  ];

  const userAssignOption = [
    { value: "User 1", label: "User 1" },
    { value: "User 2", label: "User 2" },
    { value: "User 3", label: "User 3" },
    { value: "User 4", label: "User 4" },
    { value: "User 5", label: "User 5" },
  ];

  const handleChangePaiority = (value) => {
    console.log(`selected ${value}`);
  };

  const handleChangeUserAssign = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-6 w-[90%] bg-white shadow rounded md:px-16 my-[2rem] mx-auto p-4">
        <Input placeholder="Task Title" />
        <TextArea rows={4} />
        <DatePicker
          onChange={onChange}
          style={{
            width: "100%",
          }}
        />
        <Select
          mode="tags"
          style={{
            width: "100%",
          }}
          placeholder="Priority Level"
          onChange={handleChangePaiority}
          options={paiorityLavelOptions}
        />
        <Select
          mode="tags"
          style={{
            width: "100%",
          }}
          placeholder="Assign To"
          onChange={handleChangeUserAssign}
          options={userAssignOption}
        />
        <Select
          mode="tags"
          style={{
            width: "100%",
          }}
          placeholder="Select Team"
          onChange={handleChangeUserAssign}
          options={userAssignOption}
        />

        <div>
          <button className="common-btn">
            Add Task
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddTask;
