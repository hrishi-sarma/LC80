import React from "react";
import './docks.css'; // Import the CSS file

const FloatingDock = () => {
  const icons = [
    { name: "home", iconClass: "fas fa-home" },        // Home Icon
    { name: "skills", iconClass: "fas fa-tasks" }, // Skills Icon
    { name: "projects", iconClass: "fas fa-laptop-code" },   // Projects Icon
    { name: "contents", iconClass: "fas fa-folder-open" }, // Other Contents Icon
    { name: "contacts", iconClass: "fas fa-address-book" }, // Contacts Icon
  ];

  return (
    <div className="dock-container">
      <div className="docks">
        {icons.map((icon, index) => (
          <DockIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};


const DockIcon = ({ icon }) => {
  return (
    <div className="icon-container group relative">
      {/* Icon */}
      <div className="dock-icon group-hover:scale-125">
        <i className={`${icon.iconClass}`}></i> {/* Font Awesome Icon */}
      </div>

      {/* Text on hover */}
      <div className="icon-label group-hover:opacity-100">
        {icon.name.charAt(0).toUpperCase() + icon.name.slice(1)}
      </div>
    </div>
  );
};

export default FloatingDock;
