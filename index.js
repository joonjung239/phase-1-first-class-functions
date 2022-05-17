function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    console.log ('------------------------------------------')
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function(){
        
    }
}