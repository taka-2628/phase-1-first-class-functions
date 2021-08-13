function receivesAFunction(callback){
    callback ()
}

receivesAFunction(function () {return "joking"});

function returnsANamedFunction(){
    return (function camel() {"Joking"})
}

function returnsAnAnonymousFunction(){
    return (function () {"Joking"})
}