var react = require('./rectangle');    

function solveReact(l,b){
    console.log("area of retangle"+l);
    console.log("area of retangle"+b);

    if(l <= 0 || b <= 0){
        console.log("illegal value");
    }else{
        console.log("calculated area"+react.area(l,b));
        console.log("calculated perimeter"+react.perimeter(l,b));
    }

}

solveReact(2,3);
solveReact(3,3);
solveReact(9,2);
solveReact(2,-9);