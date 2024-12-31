// CodeNode.js
import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const CodeNode = ({ id, data }) => {
  const [code, setCode] = useState(
    data?.code || "// Your code here\nreturn input;"
  );
  const [language, setLanguage] = useState(data?.language || "javascript");

  return (
    <BaseNode
      id={id}
      title="Code"
      inputs={[{ id: "input", label: "Input" }]}
      outputs={[
        { id: "output", label: "Output" },
        { id: "error", label: "Error" },
      ]}
    >
      <div className="p-2">
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Language:
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="sql">SQL</option>
            </select>
          </label>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Code:
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm font-mono text-sm"
              rows={6}
              style={{ backgroundColor: "#f8f9fa" }}
            />
          </label>
        </div>
      </div>
    </BaseNode>
  );
};
