var fs = require('fs');


var flower = fs.readFile('flower.txt', function (err, data) {
    if (err) throw err;
    let x = data.toString()
    var array = x.split("\n")
    //    console.log(array)
    let cou = array.length
    console.log("num of rose")
    console.log(cou)
    console.log("statrs with S")
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf('S') != -1) {
            console.log(array[i]);
        }
    }
    console.log("starts with A")
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf('A') != -1) {
            console.log(array[i]);
        }
    }
     for( var i=0; i<array.length;i++)
    {
        if (array[i].length== 5)
        console.log(array[i])
    }
});

