// APINode.js
import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || "GET");
  const [endpoint, setEndpoint] = useState(data?.endpoint || "");
  const [headers, setHeaders] = useState(data?.headers || "");

  return (
    <BaseNode
      id={id}
      title="API"
      inputs={[{ id: "body", label: "Body" }]}
      outputs={[
        { id: "response", label: "Response" },
        { id: "error", label: "Error" },
      ]}
    >
      <div className="p-2">
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Method:
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </label>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Endpoint:
            <input
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="https://api.example.com/endpoint"
            />
          </label>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Headers:
            <textarea
              value={headers}
              onChange={(e) => setHeaders(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Content-Type: application/json"
              rows={2}
            />
          </label>
        </div>
      </div>
    </BaseNode>
  );
};
