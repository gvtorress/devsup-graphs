class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices
    // this.adjMatrix = [];
    // for (let i = 0; i < this.numVertices; i++) {
    //   this.adjMatrix[i] = [];
    //   for (let j = 0; j < this.numVertices; j++) {
    //     this.adjMatrix[i][j] = 0;
    //   }
    // }
    this.adjMatrix = Array(numVertices).fill(-1).map(() => Array(numVertices).fill(-1));
  }

  addEdge = (v1, v2, w) => {
    this.adjMatrix[v1][v2] = w;
  }

  removeEdge = (v1, v2) => {
    this.adjMatrix[v1][v2] = -1;
  }

  printGraph = () => {
    this.adjMatrix.forEach((r, idx) => {
      console.log(`${idx} - ${r.join(' ')}`);
    });

    // for (let i = 0; i < this.numVertices; i++) {
    //   console.log(this.adjMatrix[i].join(' '));
    // }
  }

  lowest_weight = () => {
    let minValue = Infinity;
    let minEdge = [];
    this.adjMatrix.forEach((r, idx) => {
      r.forEach((elem, idx_e) => {
        if (idx !== idx_e) {
          if (elem < minValue && elem >= 0) {
            minEdge = [idx, idx_e, elem];
            minValue = elem;
          }
        }
      });
    });

    if (minValue === Infinity) return null;

    return minEdge;
  }
}

const m = new Graph(5);
m.addEdge(0, 1, 3);
m.addEdge(1, 0, 3);
m.addEdge(0, 2, 4);
m.addEdge(2, 0, 4);
m.addEdge(0, 3, 5);
m.addEdge(3, 0, 5);
m.addEdge(1, 3, 3);
m.addEdge(3, 1, 3);
m.addEdge(2, 3, 6);
m.addEdge(3, 2, 6);
m.addEdge(4, 3, 1);
m.addEdge(3, 4, 2);

m.printGraph();

m.removeEdge(0, 1);
m.printGraph();

console.log(m.lowest_weight());
