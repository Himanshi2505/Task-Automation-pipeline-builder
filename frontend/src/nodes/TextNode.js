// TextNode.js
import React, { useState, useEffect, useRef } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Function to extract variables from text
  const extractVariables = (text) => {
    const regex = /\{\{([^}]+)\}\}/g;
    const matches = text.match(regex) || [];
    return [...new Set(matches.map((match) => match.slice(2, -2).trim()))];
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [text]);

  // Update variables when text changes
  useEffect(() => {
    const newVariables = extractVariables(text);
    setVariables(newVariables);
  }, [text]);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map((variable) => ({
        id: variable,
        label: variable,
      }))}
      outputs={[{ id: "output", label: "Output" }]}
      style={{
        width: "auto",
        minWidth: "200px",
      }}
    >
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full min-h-[60px] p-2 border rounded-md resize-none"
        placeholder="Enter text here. Use {{variable}} to create input handles."
      />
    </BaseNode>
  );
};
