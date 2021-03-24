var a = new Array('#cccc00', '#33cc33', '#0099ff', '#cc33ff', '#ff3300')

var x = setInterval(function () {
    var temp = Math.floor(Math.random() * 5);
    while (a[temp] == document.getElementsByClassName('outline2')[0].style.backgroundColor) {
        temp = Math.floor(Math.random() * 5);
    }
    document.getElementsByClassName('outline2')[0].style.backgroundColor = a[temp];

}, 1000)