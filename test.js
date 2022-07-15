var canFinish = function(numCourses, prerequisites) {
    const toGraph = (num, pre) => {
          let adjacency = new Array(num);
          for(let i=0; i<num; i++){
              adjacency[i] = [];
          }  
          for(let i=0; i<pre.length; i++){
              adjacency[pre[i][0]].push(pre[i][1])
          }
          return adjacency;
    }  
    const dfs = (graph, node, visited) => {
        if(node)console.log(graph[node], visited)
        if(visited.includes(node)) return false;
        if(graph[node].length===0) return true;
        visited.push(node);
        // console.log(visited)
        for(let i=0; i<graph[node].length; i++){
            if(!dfs(graph, graph[node][i], visited)) return false;
        }
        // console.log(node)
        let index = visited.indexOf(node);
        visited.splice(index, 1)
        // if(node===1)console.log(visited)
        graph[node].length = [];
        return true;
    }
    let graph = toGraph(numCourses, prerequisites);
    let visited = [];
    
    for(let i=0; i<numCourses; i++){
        
        if(!dfs(graph, i, visited)) return false;
    }
    dfs(graph, 1, visited)
    console.log(visited)
    return true;
};

console.log(canFinish(
    5,
    [[1,4],[2,4],[3,1],[3,2]]))
