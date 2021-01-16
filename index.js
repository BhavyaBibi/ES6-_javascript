//call back

function  a(Callback){
    console.log("inside function of a");
    
Callback();
}

function b()
{
    console.log("inside function of b");
}

a (function(){
    console.log("test condition");

});