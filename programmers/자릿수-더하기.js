function solution(n) 
{
    const num = String(n);
    let sum = 0;
        
    for (let i = 0; i < num.length; i++)
        sum += Number(num[i]);
    
    return sum;
}