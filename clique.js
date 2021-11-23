// JavaScript implementation of the approach
const MAX = 100;

var clique = [];
var cliqueNode = [];
 
// Stores the vertices
let store = new Array(MAX).fill(0), n = 0;
 
// Graph
let graphaux = new Array(MAX).fill(0).map(() => new Array(MAX).fill(0));

// Degree of the vertices
let d = new Array(MAX).fill(0);

// Function to check if the given set of vertices
// in store array is a clique or not
const is_clique = (b) => {
 
    // Run a loop for all the set of edges
    // for the select vertex
    for (let i = 1; i < b; i++) {
        for (let j = i + 1; j < b; j++)

            // If any edge is missing
            if (graphaux[store[i]][store[j]] == 0)
                return false;
    }
    return true;
}

// Function to print the clique
const print = (n) => {
    clique = [];
    for (let i = 1; i < n; i++){
        //console.log(`${store[i]} `);
        clique.push(store[i]);

    }
    warn(`Clique: ${clique}`);
    console.log(`${clique}`);
    console.log();
}

// Function to find all the cliques of size s
const findCliques = (i, l, s) => {
 
    // Check if any vertices from i+1 can be inserted
    for (let j = i + 1; j <= n - (s - l); j++) {

        // If the degree of the graph is sufficient
        if (d[j] >= s - 1) {

            // Add the vertex to store
            store[l] = j;

            // If the graph is not a clique of size k
            // then it cannot be a clique
            // by adding another edge
            if (is_clique(l + 1))

                // If the length of the clique is
                // still less than the desired size
                if (l < s)

                    // Recursion to add vertices
                    findCliques(j, l + 1, s);

                // Size is met
                else
                    print(l + 1);
            
        }

    }
}

async function Clique() {

    var code = new algorithm();
     
    var k = prompt("Tamanho da clique", "3");
    if (k == null) {
        warn("Diga o tamanho da clique!");
        return;
    };
    parseInt(k);

    const edges = [];

    for (let i = 0; i < ggraph.edges.length; i++) {
        let u = ggraph.edges[i].u;
        let v = ggraph.edges[i].v;
        const e = [u.label, v.label];
        edges.push(e);
        let old_hue = ggraph.edges[i].hue;
        ggraph.edges[i].hue = 150;
        await code.print(2);
        ggraph.edges[i].hue = old_hue;
    }

    let size = edges.length;
    n = ggraph.nodes.length;
 
    for (let i = 0; i < size; i++) {
        graphaux[edges[i][0]][edges[i][1]] = 1;
        graphaux[edges[i][1]][edges[i][0]] = 1;
        d[edges[i][0]]++;
        d[edges[i][1]]++;
    }
 
    findCliques(0, 1, k);

}