const print = (i) => console.log(i)
function loop(n, func) {
    for (var i = 0; i < n; i++) func(i)
}
loop(10, function (i) {
    print(i)
})


