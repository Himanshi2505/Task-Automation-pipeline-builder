// LLMNode.js
import React from "react";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[
        { id: "system", label: "System" },
        { id: "prompt", label: "Prompt" },
      ]}
      outputs={[{ id: "response", label: "Response" }]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
