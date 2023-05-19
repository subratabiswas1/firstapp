// ---simple calculator app---

function add(v1,v2){
    return v1+v2;
}
function sub(v1,v2){
    return v1-v2;
}
function mul(v1,v2){
    return v1*v2;
}
function div(v1,v2){
    return (v1/v2).toFixed(2);
}
export {add,sub,mul,div};