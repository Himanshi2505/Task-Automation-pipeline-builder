// toolbar.js
import React from "react";
import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="border-b border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex gap-4 flex-wrap">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </div>
    </div>
  );
};
