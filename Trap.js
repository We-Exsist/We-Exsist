var x = 1;
while (0 !== x) {
    var y = 20 - x;
    alert("Get ready for " + y + " more!");
    x = x + 1;
    if (x === 20) { if (confirm("If this were real this would most likely go on forever. Would you like to restart the while loop?");) { break; } else { x = 0; } }
}
alert("The word document's macro virus demonstration doesn't work quite right. I am not proficient in Visual Basic, so I cannot reliably debug this problem.");