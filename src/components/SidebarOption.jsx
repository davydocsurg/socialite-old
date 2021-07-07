import React from "react";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2 className="pl-3">{text}</h2>
    </div>
  );
}

export default SidebarOption;
