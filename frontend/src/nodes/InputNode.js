// InputNode.js
import React, { useState } from "react";
import { BaseNode, NodeInput } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [type, setType] = useState(data?.inputType || "Text");

  return (
    <BaseNode id={id} title="Input" outputs={[{ id: "value" }]}>
      <NodeInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <NodeInput
        label="Type"
        type="select"
        value={type}
        onChange={(e) => setType(e.target.value)}
        options={[
          { value: "Text", label: "Text" },
          { value: "File", label: "File" },
        ]}
      />
    </BaseNode>
  );
};
