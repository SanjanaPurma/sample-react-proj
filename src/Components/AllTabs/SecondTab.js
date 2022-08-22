import React, { useState } from "react";
import DropDown from "../Dorpdown/DropDown";

const SecondTab = () => {
  const teamActions = [
    { label: "Interact", value: "interact" },
    { label: "Brainstorm", value: "brainstorm" },
    { label: "Review", value: "review" },
  ];

  const plannedActions = [
    { label: "Sprint Planning", plannedValue: "Sprint Planning" },
    { label: "Knowlege Sharing", plannedValue: "Knowlege Sharing" },
    { label: "Restrospective", plannedValue: "Restrospective" },
  ];

  const [value, setValue] = useState("interact");
  const [plannedValue, setPlannedValue] = useState("Sprint Planning");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlePlannedValueChange = (event) => {
    setPlannedValue(event.target.value);
  };

  return (
    <div className="SecondTab">
      <DropDown
        label="What can we do?"
        options={teamActions}
        value={value}
        onChange={handleChange}
      />
      <p>We can {value}!</p>
      <DropDown
        label="What can we plan?"
        options={plannedActions}
        value={plannedValue}
        onChange={handlePlannedValueChange}
      />
      <p>We can plan {plannedValue}!</p>
    </div>
  );
};
export default SecondTab;
