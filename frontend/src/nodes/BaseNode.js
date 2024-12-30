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
      className="p-4 rounded-lg shadow-md bg-white border-2 border-gray-200"
      style={{
        minWidth: "200px",
        minHeight: "80px",
        ...style,
      }}
    >
      {/* Title */}
      <div className="text-lg font-semibold mb-3 text-gray-700">{title}</div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
            ...input.style,
          }}
        />
      ))}

      {/* Content */}
      <div className="p-2">{children}</div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
            ...output.style,
          }}
        />
      ))}
    </div>
  );
};

// Input field component
export const NodeInput = ({ label, value, onChange, type = "text" }) => (
  <div className="mb-2">
    <label className="block text-sm font-medium text-gray-700">
      {label}:
      {type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {onChange.options?.map((opt) => (
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      )}
    </label>
  </div>
);
