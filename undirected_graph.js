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
    this.adjMatrix = Array(numVertices).fill(0).map(() => Array(numVertices).fill(0));
  }

  addEdge = (v1, v2) => {
    this.adjMatrix[v1][v2] = 1;
    this.adjMatrix[v2][v1] = 1;
  }

  removeEdge = (v1, v2) => {
    this.adjMatrix[v1][v2] = 0;
    this.adjMatrix[v2][v1] = 0;
  }

  printGraph = () => {
    this.adjMatrix.forEach((r, idx) => {
      console.log(`${idx} - ${r.join(' ')}`);
    });

    // for (let i = 0; i < this.numVertices; i++) {
    //   console.log(this.adjMatrix[i].join(' '));
    // }
  }

  degree = (v) => {
    let count = 0;
    for (let i = 0; i < this.numVertices; i++) {
      if (this.adjMatrix[v][i] === 1) count++;
    }
    return count;
  }

  listByDegree = () => {
    const degrees = [];

    for (let i = 0; i < this.numVertices; i++) {
      const degree = this.degree(i);

      if (!degrees[degree]) degrees[degree] = [];
      degrees[degree].push(i);
    }

    for (let i = 0; i < this.numVertices; i++) {
      if (degrees[i]) {
        console.log(`degree = ${i}: {${degrees[i].join(', ')}}`);
      } else {
        console.log(`degree = ${i}: {}`);
      }
    }

    // degrees.forEach((degree, idx) => console.log(`degree ${idx} - {${degree.join(',')}}`))

    // return degrees;
  }
}

const m = new Graph(5);
m.addEdge(0, 1);
m.addEdge(0, 2);
m.addEdge(0, 3);
m.addEdge(1, 3);
m.addEdge(2, 3);
m.addEdge(3, 4);

m.printGraph();
console.log(m.degree(0));

// m.removeEdge(0, 1);
m.printGraph();

// console.log(m.listByDegree());
m.listByDegree();