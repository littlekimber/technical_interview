class UnionFind{
    constructor(n){
        this.count = n;
        this.parent = [];
        this.size = [];
        for(let i=0; i<n; i++){
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }
    // connect p and q 
    union(p, q){
        let root_p = find(p);
        let roor_q = find(q);
        if(root_q===root_p){
            return;
        }
        if(this.size[root_p]>this.size[root_q]){
            this.parent[root_q] = root_p;
            this.size[root_p] += this.size[root_q];
        }else{
            this.parent[root_p] = root_q;
            this.size[root_q] += this.size[root_p]
        }
        this.count--;
    }

    // find the root of p
    find(p){
        while(this.parent[p]!=p){
            parent[p] = find(parent[p]); // use path compression
        }
        return parent[x];
    }
    
    count(){
        return this.count;
    }

    connected(p, q){
        let root_p = find(p);
        let root_q = find(q);
        return root_p === root_q;
    }
}