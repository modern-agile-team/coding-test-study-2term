function solution(bridge_length, weight, truck_weights) {
    const truckOnBridge = [];
    const truckOnBridgeTime = [];
    let minTime = 0;
    
    while (truck_weights.length || truckOnBridge.length) {
        for (let i = 0; i < truckOnBridgeTime.length; i+= 1) truckOnBridgeTime[i] -= 1;
        
        if (truckOnBridgeTime[0] === 0) {
            truckOnBridge.shift();
            truckOnBridgeTime.shift();
        }
        
        const weightOnBridge = truckOnBridge.reduce((sum, current) => sum += current, 0);
        
        if (weightOnBridge + truck_weights[0] <= weight) {
            truckOnBridge.push(truck_weights.shift());
            truckOnBridgeTime.push(bridge_length);
        }
        
        minTime += 1;
    }
    return minTime;
}