class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    // this.adjList = [];
    this.adjList = Array(numVertices).fill(0).map(() => []);
    // for (let i = 0; i < numVertices; i++) {
    //   this.adjList[i] = [];
    // }
  }

  addEdge = (v1, v2) => {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge = (v1, v2) => {
    this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
    this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
  }

  printGraph = () => {
    for (let i = 0; i < this.numVertices; i++) {
      console.log(`${i} -> {${this.adjList[i].join(' ')}}`);
    }
  }

  degree = (v) => {
    return this.adjList[v].length;
  }

  listByDegree = () => {
    let degrees = [];

    for (let i = 0; i < this.numVertices; i++) {
      let degree = this.degree(i);
      
      if (!degrees[degree]) {
        degrees[degree] = [];
      }

      degrees[degree].push(i);
    }

    for (let i = 0; i <= this.numVertices; i++) {
      if (degrees[i]) {
        console.log(`grau=${i}: {${degrees[i].join(', ')}}`);
      } else {
        console.log(`grau=${i}: {}`);
      }
    }
  }
}

let graph = new Graph(5);
console.log(graph);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(3, 4);
// graph.removeEdge(4, 3);
graph.printGraph();
console.log("degree(3) = " + graph.degree(3));
graph.listByDegree();
