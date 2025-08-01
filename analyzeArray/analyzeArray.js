function avarage(a){
    const result =a.reduce((a,b)=>a+b);
    return result/a.length;
}


function max(a){
    return Math.max(...a);
}

function min(a){
    return Math.min(...a);
}
function analyzeArray(a){
    const maxVal = max(a);
    const minVal = min(a);
    const avg = avarage(a);
    const length = a.length;

    return {
        max: maxVal,
        min: minVal,
        avg: avg,
        length: length
    };
}

module.exports={
    max,
    min,
    avarage,
    analyzeArray
}