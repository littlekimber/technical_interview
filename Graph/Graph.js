

import Queue from "../Queue/Queue.js";

class UndirectedGraph{
    constructor(nOfVertices){
        this.nOfVertices = nOfVertices;
        this.adjList = new Map();
    }

    addVertex(v){
        this.adjList.set(v, []);
    }

    addEdge(v, w){
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    printGraph(){
        let keys = this.adjList.keys();
        for(let i of keys){
            let values = this.adjList.get(i);
            let conc = '';
            for(let j of values){
                conc += j + '';
            }
            console.log(i+'->'+conc);
        }
    }

    bfs(startingNode){
        let visited = {};
        let q = new Queue(this.nOfVertices);
        visited[startingNode] = true;
        q.enqueue(startingNode);
        while(!q.isEmpty()){
            let getQueueElement = q.dequeue();
            console.log(getQueueElement);
            let get_List = this.adjList.get(getQueueElement);
            for(let i=0;i<get_List.length;i++){
                let lower_level = get_List[i];
                if(!visited[lower_level]){
                    visited[lower_level] = true;
                    q.enqueue(lower_level);
                }
            }
        }
    }

    dfs(startingNode){
        
        let visited = {};
        this.dfsHelper(startingNode, visited);

    }
    dfsHelper = function(vertex, visited){
        visited[vertex] = true;
        console.log(vertex);
        let lower_vertex = this.adjList.get(vertex);
        for(let i=0; i<lower_vertex.length; i++){
            let element = lower_vertex[i]
            if(!visited[element]){
                this.dfsHelper(element, visited)
            }
        }
    };
}

let g = new UndirectedGraph(6);
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
g.printGraph();
g.dfs('A');