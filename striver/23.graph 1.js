//DFS


class Graph{

    constructor(vertices){
    this.vertices=vertices;
    this.adjlist= new Map();
    
    for(let i=0;i<vertices;i++){
        this.adjlist.set(i,[]);
        }
      }
    
    
    addEdge(v, w) {
      this.adjlist.get(v).push(w);
      this.adjlist.get(w).push(v); 
    }
    
    
dfs(startvertex){
     
     const visited=new Set();
     
    const dfshelper=(vertex)=>{
    visited.add(vertex);
    console.log("visited vertex:"+vertex);
    
    const neighbors=this.adjlist.get(vertex);
    for(const neighbor of neighbors){
        if(!visited.has(neighbor)){
            dfshelper(neighbor);
        } 
    }
    };
    dfshelper(startvertex);

    
    //it is for find the disconnected components
    for(let i=0;i<this.vertices;i++){
        if(!visited.has(i)){
            dfshelper(i);
        }
      }
          }
    }    
    const V= 6; 
    const graph = new Graph(V);
    
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(4, 5);
    
    console.log("Depth-First Search:");
    graph.dfs(0);

    

    
//BFS

function bfs(V,adj){

    const queue=[];
    const removedElements=[];
    const visited=new Array(V).fill(false);
    
    //assign the 1st vertex is visited and the pushed into array
    visited[0]=true;
    queue.push(0);
    
    //remove the 1st element from the queue added to the array
    while(queue.length!==0){
        const vertex=queue.shift();
        removedElements.push(vertex)
    
    //pick the unvisited vertices which one is present at the near
    for(const neighbor of adj[vertex]){
        if(!visited[neighbor]){
            visited[neighbor]=true;
            queue.push(neighbor);
            
        }
    }
    }
    return removedElements;
    
    }
    
    
    const V1 = 5;
    const edges1 = [[0, 1], [0, 2], [0, 3], [2, 4]];
    const adj1 = Array(V1).fill(0).map(() => []);
    for (const [u, v] of edges1) {
      adj1[u].push(v);
    }
    const bfsResult1 = bfs(V1, adj1);
    console.log(bfsResult1);
    
    const V2 = 3;
    const edges2 = [[0, 1], [0, 2]];
    const adj2 = Array(V2).fill(0).map(() => []);
    for (const [u, v] of edges2) {
      adj2[u].push(v);
    }
    const bfsResult2 = bfs(V2, adj2);
    console.log(bfsResult2); 
    
    
    
    

//DETECT A CYCLE USING UNDIRECTED GRAPH USING DFS

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  isCyclic() {
    const visited = new Array(this.vertices).fill(false);
    const parent = new Array(this.vertices).fill(-1);

    for (let i = 0; i < this.vertices; i++) {
      if (!visited[i] && this.isCyclicUtil(i, visited, parent)) {
        return true;
      }
    }
    return false;
  }

  isCyclicUtil(v, visited, parent) {
    visited[v] = true;

    for (const neighbor of this.adjList.get(v)) {
      if (!visited[neighbor]) {
        if (this.isCyclicUtil(neighbor, visited, v)) {
          return true;
        }
        //if neighbor have the multiple parant then it have the cycle
      } else if (neighbor !== parent[v]) {
        return true;
      }
    }
    return false;
  }
}

const V = 5; 
const graph = new Graph(V);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(4, 5);

if (graph.isCyclic()) {
  console.log("The graph contains a cycle.");
} else {
  console.log("The graph does not contain a cycle.");
}

//DETECT A CYCLE USING UNDIRECTED GRAPH USING BFS

class graph {
    constructor(vertices) {
        this.vertices = vertices; // Total number of vertices in the graph
        this.adjacencyList = new Array(vertices); // Initialize the adjacency list
        for (let i = 0; i < vertices; i++) {
            this.adjacencyList[i] = []; // Create an empty list for each vertex
        }
    }

    addEdge(u, v) {
        this.adjacencyList[u].push(v); // Add an edge from u to v
        this.adjacencyList[v].push(u); // Add an edge from v to u (undirected graph)
    }

    iscyclic() {
        const visited = new Array(this.vertices).fill(false); 

        for (let v = 0; v < this.vertices; v++) {
            if (!visited[v]) {
                if (this.iscyclicutil(v, visited, -1)) {
                    return true; 
                }
            }
        }
        return false; 
    }



iscyclicutil(vertex,visited,parant){
  const queue=[];
  queue.push({vertex,parant});


while(queue.length>0){
     const {vertex,parant}=queue.shift();
     visited[vertex]=true;//current index visited

//here the parant are the same even though we follow the diffferent path
for(const neighbor of this.adjacencyList[vertex]){

     if(!visited[neighbor]){
     visited[neighbor]=true;//neighbor index visited
      queue.push({vertex:neighbor,parant:vertex});
     }
else if(neighbor!==parant){
    return true;
     }
   }
}
   return false;

}
}
const Graph = new graph(4); 
Graph.addEdge(0, 1); // Add edges to the graph
Graph.addEdge(1, 2);
Graph.addEdge(2, 3);
Graph.addEdge(3, 0);

const hasCycle = Graph.iscyclic(); 
console.log(hasCycle);




//DETECT A CYCLE USING DIRECTED GRAPH USING DFS

//DETECT A CYCLE USING UNDIRECTED GRAPH USING BFS

//TOPOLOGICAL SORT BFS

class Graph{
    constructor(vertices){
        this.vertices=vertices;
        this.adjacencyList = new Array(vertices).fill().map(() => []);
        this.indegrees=new Array(vertices).fill(0);
        }
        
        addedge(u,v){
            this.adjacencyList[u].push(v);
            this.indegrees[v]++;
        
        }
    
        breadthfirsttopologysort(){
         const queue=[];
         const topologicalorder=[];
         
         //find where the indegree equal to zero
         for(let i=0;i<this.vertices;i++){
             if(this.indegrees[i]===0){
                 queue.push(i);
             }
         }
            
         //whatever value i have at quue push to the topological order
         while(queue.length>0){
             const vertex=queue.shift();
             topologicalorder.push(vertex);
             
    for(const neighbor of this.adjacencyList[vertex]){
    this.indegrees[neighbor]--;
    if(this.indegrees[neighbor]===0){
        queue.push(neighbor);
    }
      }
   
        }

            return topologicalorder;
        }
    }   
      
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);

const topologicalOrder = graph.breadthfirsttopologysort();
console.log(topologicalOrder); 

//TOPOLOGICAL SORT DFS

function topologicalsort(graph){
    const visited=new Set();
    const stack=[];
    
    function visit(node){
        
    
    if(!visited.has(node)){
        visited.add(node);
    }
    
    for(const neighbor of graph[node]){
        visit(neighbor);
    }
    
    stack.push(node);
        }
    for(const node of Object.keys(graph)){
    visit(node);   
 }

return stack.reverse();
}

//BIPARTITE GRAPH USING THE BFS

//BIPARTIPE GRAPH USING THE DFS







