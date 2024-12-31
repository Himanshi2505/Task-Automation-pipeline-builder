// TransformNode.js
import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(
    data?.transformType || "uppercase"
  );
  const [customTransform, setCustomTransform] = useState(
    data?.customTransform || ""
  );

  return (
    <BaseNode
      id={id}
      title="Transform"
      inputs={[{ id: "input", label: "Input" }]}
      outputs={[{ id: "output", label: "Output" }]}
    >
      <div className="p-2">
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Transform Type:
            <select
              value={transformType}
              onChange={(e) => setTransformType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="uppercase">Uppercase</option>
              <option value="lowercase">Lowercase</option>
              <option value="custom">Custom</option>
            </select>
          </label>
        </div>
        {transformType === "custom" && (
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Custom Transform:
              <textarea
                value={customTransform}
                onChange={(e) => setCustomTransform(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Enter custom transformation..."
                rows={2}
              />
            </label>
          </div>
        )}
      </div>
    </BaseNode>
  );
};
