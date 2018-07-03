var rect = require('./rectangle');    

function solveReact(l,b){
    rect(l, b, (err,rectangle) => {
        if(err){
            console.log("Error, ",err.message);
        }else{
            console.log("AREA", rectangle.area());
            console.log("PERIMETER", rectangle.perimeter());
        }
    });
    console.log("executed after callback");
}

solveReact(2,3);
solveReact(3,3);
solveReact(9,2);
solveReact(2,-9);