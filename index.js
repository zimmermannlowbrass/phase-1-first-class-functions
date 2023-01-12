
function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    const namedFunct = function() {
        console.log('name')
    }
    return namedFunct; 
}

function returnsAnAnonymousFunction() {
    return (function() {
        console.log('hi');
    });
}