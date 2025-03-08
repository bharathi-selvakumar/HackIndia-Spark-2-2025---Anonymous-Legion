function dijkstra(graph, start, end) {
    let distances = {}, prev = {}, pq = [{ node: start, distance: 0 }];
    for (let node in graph) distances[node] = Infinity;
    distances[start] = 0;

    while (pq.length) {
        pq.sort((a, b) => a.distance - b.distance);
        let { node } = pq.shift();
        if (node === end) {
            let path = [], temp = end;
            while (temp) { path.push(temp); temp = prev[temp]; }
            return { path: path.reverse(), distance: distances[end] };
        }
        for (let neighbor in graph[node]) {
            let newDist = distances[node] + graph[node][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                prev[neighbor] = node;
                pq.push({ node: neighbor, distance: newDist });
            }
        }
    }
    return { path: [], distance: Infinity }; 
}

module.exports = { dijkstra };
