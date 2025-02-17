class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    // this.adjList = [];
    this.adjList = Array(numVertices).fill(0).map(() => []);
    // for (let i = 0; i < numVertices; i++) {
    //   this.adjList[i] = [];
    // }
  }

  addEdge = (v1, v2, w) => {
    this.adjList[v1].push([v2, w]);
  }

  removeEdge = (v1, v2) => {
    this.adjList[v1] = this.adjList[v1].filter((v) => v[0] !== v2);
  }

  printGraph = () => {
    for (let i = 0; i < this.numVertices; i++) {
      console.log(`${i} -> {${this.adjList[i].join(' | ')}}`);
    }
  }

  lowestWeight = () => {
    let minEdge = [-1, -1, -1];
    let minValue = Infinity;

    for (let i =0; i < this.numVertices; i++) {
      for (let j = 0; j < this.adjList[i].length; j++) {
        let currEdge = this.adjList[i][j];
        if (currEdge[1] < minValue) {
          minValue = currEdge[1];
          minEdge = [i, ...currEdge];
        }
      }
    }

    return minEdge;
  }

  neighbours = (v) => {
    return this.adjList[v].map((v) => v[0]);
  }
}

let graph = new Graph(5);
console.log(graph);

graph.addEdge(0, 1, 2);
graph.addEdge(0, 2, 5);
graph.addEdge(0, 3, 3);
graph.removeEdge(0, 2);
// graph.addEdge(3, 4);
graph.printGraph();
console.log(graph.lowestWeight());
console.log(graph.neighbours(0));
