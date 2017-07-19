function updateInventory(curInv, newInv) {
    // All inventory must be accounted for or you're fired!

    // checking AGAINST current inventory
    for (var i = newInv.length-1; i>=0; i--){

        for (var j = curInv.length-1; j>=0; j--){

            // console.log(newInv[i][1] + ' ' + curInv[j][1]);

            if (curInv[j][1] == newInv[i][1]){
                curInv[j][0] += newInv[i][0];
                newInv[i][0] = 0;
            }

        }
        // }

    }

    for (k in newInv){
        if (newInv[k][0] != 0){
            curInv.push([newInv[k][0], newInv[k][1]]);
        }
    }

     function Comparator(a, b) {
       if (a[1] < b[1]) return -1;
       if (a[1] > b[1]) return 1;
       return 0;
     }


    return curInv.sort(Comparator);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));