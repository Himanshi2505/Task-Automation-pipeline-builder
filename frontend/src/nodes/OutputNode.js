// OutputNode.js
import React, { useState } from "react";
import { BaseNode, NodeInput } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [type, setType] = useState(data?.outputType || "Text");

  return (
    <BaseNode id={id} title="Output" inputs={[{ id: "value", label: "Value" }]}>
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
          { value: "Image", label: "Image" },
        ]}
      />
    </BaseNode>
  );
};
