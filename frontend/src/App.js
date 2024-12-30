import React from "react";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">VectorShift Pipeline Builder</h1>
      </header>
      <PipelineToolbar />
      <div className="flex-1">
        <PipelineUI />
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;
