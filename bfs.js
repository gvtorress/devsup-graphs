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

  bfs = (v, visited = null) => {
    let visitedArr = visited ? visited : Array(this.numVertices).fill(false);
    let queue = [];

    queue.push(v);
    visitedArr[v] = true;

    while (queue.length > 0) {
      v = queue.shift();
      console.log(`Visited ${v}`);

      for (const w of this.neighbours(v)) {
        if (!visitedArr[w]) {
          visitedArr[w] = true;
          queue.push(w);
        }
      }
    }
  }

  connectedComponents = () => {
    let visited = Array(this.numVertices).fill(false);
    let cont = 0;

    for (let i = 0; i < this.numVertices; i++) {
      if (!visited[i]) {
        console.log(`Component ${cont}`);
        this.bfs(i, visited);
        cont++;
      }
    }

    return cont;
  }
}

const graph1 = new Graph(5);
graph1.addEdge(0, 1);
graph1.addEdge(0, 2);
graph1.addEdge(0, 3);
graph1.addEdge(2, 3);
graph1.addEdge(2, 4);
graph1.addEdge(3, 4);
graph1.bfs(0);

const graph2 = new Graph(7);
graph2.addEdge(0, 1);
graph2.addEdge(0, 2);
graph2.addEdge(1, 2);
graph2.addEdge(3, 4);
graph2.addEdge(2, 6);

console.log(graph2.connectedComponents());
