function solution(bLen, weight, truck_weights) {
    if (weight >= truck_weights.reduce((a, b) => a + b)) return bLen + truck_weights.length;
    
    else {
        const first = truck_weights.shift();
        
        const curBridge = [];
        for (let i = 0; i < bLen - 1; i += 1) curBridge.push(0);
        curBridge.push(first);
        // curBridge = 0, 0, 0, ... , 첫번째트럭
        let curWeight = first; 
        let time = 1;
        
        while (curWeight + truck_weights.length > 0) {
            curWeight -= curBridge.shift();
            
            let next = truck_weights[0];
            
            if (curWeight + next <= weight) {
                curBridge.push(next);
                truck_weights.shift();
                curWeight += next;
            }
            else curBridge.push(0);
            time += 1;
        }
        
        return time;
    }
}
