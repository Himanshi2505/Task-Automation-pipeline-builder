// draggableNode.js
import React from "react";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="bg-gray-800 text-white rounded-lg p-4 cursor-grab hover:bg-gray-700 transition-colors min-w-[120px] flex items-center justify-center shadow-md"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="font-medium">{label}</span>
    </div>
  );
};
