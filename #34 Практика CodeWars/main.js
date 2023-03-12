//
// function buildFun(n){
//     var res = []
//     for (let i = 0; i< n; i++){
//         res.push(function(){
//             console.log(i)
//         })
//     }
//     return res
// }
//
//
// for (var j = 0; j < 10; j++) {
//     buildFun(10)[j]()
// }

var res = []

function buildFun(n){
    var men = function() {
        for (var i = 0; i< n; i++){
        res.push(function(){
            console.log(i)
            return;
        })
    }};
    men();
    return res
}


for (var j = 0; j < 10; j++) {
    buildFun(10)[j]()
}


