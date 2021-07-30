function solution(bridge_length, weight, truck_weights) {
    const truckBridege = new Array(bridge_length).fill(0);
    let time = 0;
    
    while (truckBridege.length) {
        truckBridege.shift();
        time ++;
        
        if (truck_weights.length) {
            const sumWeights = truckBridege.reduce((sum, cur) => sum + cur);
            if (weight < sumWeights + truck_weights[0]) truckBridege.push(0);
            else truckBridege.push(truck_weights.shift());
        }
    }
    return time;
}
