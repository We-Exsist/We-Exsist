var x = 1;
while (0 !== x) {
    var y = 20 - x;
    alert("Get ready for " + y + " more!");
    x = x + 1;
    if (x === 20) { break; }
}