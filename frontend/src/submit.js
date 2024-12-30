// submit.js
import React, { useState } from "react";
import { useStore } from "./store";
import axios from "axios";

export const SubmitButton = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState(null);
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/pipelines/parse",
        {
          nodes,
          edges,
        }
      );

      setAlertData(response.data);
      setShowAlert(true);

      // Hide alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4">
      {showAlert && alertData && (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <h3 className="font-semibold mb-2">Pipeline Analysis</h3>
          <p>Number of Nodes: {alertData.num_nodes}</p>
          <p>Number of Edges: {alertData.num_edges}</p>
          <p>Is DAG: {alertData.is_dag ? "Yes" : "No"}</p>
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Submit Pipeline
      </button>
    </div>
  );
};
