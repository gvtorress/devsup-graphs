class Graph {
  constructor (numVertices) {
    this.numVertices = numVertices;
    this.adjList = Array(numVertices).fill(0).map(() => []);
  }

  addEdge = (v1, v2) => {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  neighbours = (v) => {
    return this.adjList[v];
  }

  bfs = (v) => {
    let visited = Array(this.numVertices).fill(false);
    let queue = [];

    queue.push(v);
    visited[v] = true;

    while (queue.length > 0) {
      v = queue.shift();
      console.log(`Visited ${v}`);

      for (const w of this.neighbours(v)) {
        if (!visited[w]) {
          visited[w] = true;
          queue.push(w);
        }
      }
    }
  }
}

const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.bfs(0);
