function receivesAFunction(callback){
    callback ()
}

receivesAFunction(function () {return "Joking"});

function returnsANamedFunction(){
    return (function aNamedFunction() {"Joking"})
}

function returnsAnAnonymousFunction(){
    return (function () {"Joking"})
}