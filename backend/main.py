# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
from collections import defaultdict

app = FastAPI()

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    """
    Check if the graph formed by nodes and edges is a Directed Acyclic Graph (DAG).
    Returns True if the graph is a DAG, False otherwise.
    """
    # Create adjacency list
    adj_list = defaultdict(list)
    for edge in edges:
        adj_list[edge['source']].append(edge['target'])
    
    # Keep track of visited nodes and nodes in current recursion stack
    visited = set()
    rec_stack = set()
    
    def has_cycle(node: str) -> bool:
        """
        DFS helper function to detect cycles in the graph.
        Returns True if a cycle is found, False otherwise.
        """
        visited.add(node)
        rec_stack.add(node)
        
        # Check all neighbors
        for neighbor in adj_list[node]:
            if neighbor not in visited:
                if has_cycle(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
                
        rec_stack.remove(node)
        return False
    
    # Check for cycles starting from each unvisited node
    for node in [n['id'] for n in nodes]:
        if node not in visited:
            if has_cycle(node):
                return False
    
    return True

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    """
    Analyze the pipeline by counting nodes, edges and checking if it forms a DAG.
    """
    # Count nodes and edges
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    
    # Check if the graph is a DAG
    is_dag_result = is_dag(pipeline.nodes, pipeline.edges)
    
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag_result
    }

@app.get("/")
def read_root():
    return {"Ping": "Pong"}