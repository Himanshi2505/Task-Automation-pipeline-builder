// TextNode.js
import React, { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Function to extract variables from text
  const extractVariables = (text) => {
    const regex = /\{\{([^}]+)\}\}/g;
    const matches = text.match(regex) || [];
    return [...new Set(matches.map((match) => match.slice(2, -2).trim()))];
  };

  // Auto-resize textarea and update variables
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      const newVariables = extractVariables(text);
      setVariables(newVariables);
    }
  }, [text]);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Title Bar */}
      <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg flex items-center justify-between">
        <span className="font-medium">Text</span>
        <div className="text-xs bg-gray-700 px-2 py-1 rounded">{id}</div>
      </div>

      {/* Input Handles */}
      {variables.map((variable, index) => (
        <div
          key={variable}
          style={{
            position: "absolute",
            left: 0,
            top: `${100 + index * 40}px`,
          }}
        >
          <Handle
            type="target"
            position={Position.Left}
            id={variable} // Simplified ID to just use the variable name
            style={{
              left: "-8px",
              width: "16px",
              height: "16px",
              background: "#fff",
              border: "2px solid #1a202c",
            }}
          />
          <span className="text-xs text-gray-500 ml-4">{variable}</span>
        </div>
      ))}

      {/* Content Area */}
      <div className="p-4 space-y-4">
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full min-h-[100px] p-2 border rounded-md resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Enter text here. Use {{variable}} to create input handles."
        />

        {/* Variables List */}
        {variables.length > 0 && (
          <div className="text-sm">
            <div className="font-medium text-gray-700 mb-2">
              Variables Found:
            </div>
            <div className="flex flex-wrap gap-2">
              {variables.map((variable) => (
                <div key={variable} className="flex items-center">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {variable}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Preview */}
        <div>
          <div className="font-medium text-gray-700 mb-2 text-sm">Preview:</div>
          <div className="p-2 bg-gray-50 rounded-md text-sm whitespace-pre-wrap">
            {text.split(/(\{\{[^}]+\}\})/).map((part, index) => {
              if (part.match(/\{\{[^}]+\}\}/)) {
                return (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-1 rounded"
                  >
                    {part}
                  </span>
                );
              }
              return part;
            })}
          </div>
        </div>
      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{
          right: "-8px",
          width: "16px",
          height: "16px",
          background: "#fff",
          border: "2px solid #1a202c",
        }}
      />
    </div>
  );
};
