// ValidationNode.js
import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const ValidationNode = ({ id, data }) => {
  const [rules, setRules] = useState(
    data?.rules || [{ type: "required", message: "" }]
  );

  const addRule = () => {
    setRules([...rules, { type: "required", message: "" }]);
  };

  const updateRule = (index, field, value) => {
    const newRules = [...rules];
    newRules[index] = { ...newRules[index], [field]: value };
    setRules(newRules);
  };

  return (
    <BaseNode
      id={id}
      title="Validation"
      inputs={[{ id: "input", label: "Input" }]}
      outputs={[
        { id: "valid", label: "Valid" },
        { id: "invalid", label: "Invalid" },
      ]}
    >
      <div className="p-2">
        {rules.map((rule, index) => (
          <div key={index} className="mb-2">
            <select
              value={rule.type}
              onChange={(e) => updateRule(index, "type", e.target.value)}
              className="mb-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="required">Required</option>
              <option value="email">Email</option>
              <option value="min">Min Length</option>
              <option value="max">Max Length</option>
            </select>
            <input
              type="text"
              value={rule.message}
              onChange={(e) => updateRule(index, "message", e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Error message..."
            />
          </div>
        ))}
        <button
          onClick={addRule}
          className="mt-2 px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 text-sm"
        >
          Add Rule
        </button>
      </div>
    </BaseNode>
  );
};
