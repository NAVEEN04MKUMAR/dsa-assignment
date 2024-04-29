
//STRONGLY CONNECTED COMPONENT


class Solution{
    //dfs for the original graph
    dfs(node, visited,adj,stack){
        visited[node]=1;
        for(let it of adj[node]){
            if( visited[it]===0){
                this.dfs(it, visited,adj,stack);
            }
        }
        stack.push(node);//push the node after the visiting all the nodes
    }
    //dfs for the tranposed graph
    dfs3(node,visited,adjt){
        visited[node]=1;
        for(let it of adjt[node]){
            if(visited[it]===0){
                this.dfs3(it,visited,adjt);
            }
        }
    }

    kosaraju(v,adj){
        let visited=new Array(v).fill(0);//array to keep track of visited nodes
        let stack=[];
        //dfs for the original graph and fill the stack
        for(let i=0;i<v;i++){
            if(visited[i]===0){
                this.dfs(i,visited,adj,stack);
            }
        }

        let adjt=Array.from({length:v},()=>[]);//created the adjacency list
        for(let i=0;i<v;i++){
            visited[i]=0;
            for(let it of adj[i]){
                adjt[it].push(i);//add tge reverse edge to te tranposed graph
            }
        }
//thought process what it is if node is not visited already then we should increase the count of scc
        let scc=0;
        while(stack.length>0){
            let node=stack.pop();
            if(visited[node]===0){
                scc++;
                this.dfs3(node,visited,adjt);
            }
        }
        return scc;
    }
}




// Main function to test the solution
function main() {
    let n = 5;
    let edges = [
        [1, 0], [0, 2],
        [2, 1], [0, 3],
        [3, 4]
    ];
    let adj = Array.from({length: n}, () => []); 
    for (let i = 0; i < n; i++) {
        adj[edges[i][0]].push(edges[i][1]); 
    }
    let obj = new Solution(); 
    let ans = obj.kosaraju(n, adj); 
    console.log("The number of strongly connected components is: " + ans); 
}

main();

//DIJKSTRA ALGORITHM


//BELLMON FORD ALGORITHM


//FLOYD WARSHALL ALGORITHM


//MST USING PRIMS ALGORITHM


//MST USING THE KRUSKAL ALGORITHM
