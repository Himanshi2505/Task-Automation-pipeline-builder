// BaseNode.js
import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({
  children,
  title,
  inputs = [],
  outputs = [],
  style = {},
  data = {},
  id,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl"
      style={{
        minWidth: "250px",
        minHeight: "100px",
        ...style,
      }}
    >
      {/* Title bar */}
      <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg flex items-center justify-between">
        <span className="font-medium">{title}</span>
        <div className="text-xs bg-gray-700 px-2 py-1 rounded">{id}</div>
      </div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <div key={`input-${index}`} className="relative">
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${input.id}`}
            style={{
              top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
              width: "12px",
              height: "12px",
              border: "2px solid #1a202c",
              backgroundColor: "#fff",
            }}
          />
          <div
            className="absolute text-xs text-gray-500"
            style={{
              left: "20px",
              top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
              transform: "translateY(-50%)",
            }}
          >
            {input.label}
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="p-4">{children}</div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <div key={`output-${index}`} className="relative">
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${output.id}`}
            style={{
              top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
              width: "12px",
              height: "12px",
              border: "2px solid #1a202c",
              backgroundColor: "#fff",
            }}
          />
          <div
            className="absolute text-xs text-gray-500"
            style={{
              right: "20px",
              top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
              transform: "translateY(-50%)",
            }}
          >
            {output.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export const NodeInput = ({
  label,
  value,
  onChange,
  type = "text",
  options = [],
}) => (
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {type === "select" ? (
      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
      />
    )}
  </div>
);
