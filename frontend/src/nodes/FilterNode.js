// FilterNode.js
import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "");

  return (
    <BaseNode
      id={id}
      title="Filter"
      inputs={[{ id: "input", label: "Input" }]}
      outputs={[
        { id: "match", label: "Match" },
        { id: "nomatch", label: "No Match" },
      ]}
    >
      <div className="p-2">
        <label className="block text-sm font-medium text-gray-700">
          Condition:
          <textarea
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter filter condition..."
            rows={2}
          />
        </label>
      </div>
    </BaseNode>
  );
};
