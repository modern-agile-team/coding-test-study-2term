function solution(arr) {
    const min = Math.min(...arr);
    let count = arr.filter(element => min === element).length;
    for (let i = 0; i < count; i++) {
        let minIndex = arr.indexOf(min);
        arr.splice(minIndex, 1);
    }
    return arr.length !== 0 ? arr : [-1];
}