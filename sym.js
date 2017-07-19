function sym(args) {

	var uniq = function(a){
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
  }

	// function gives symmetric difference of 2 arrays
	var symDiff = function(a,b){

		var argArray = [];

		for (var j in arguments){
			argArray.push(uniq(arguments[j]));
		}

		var flattened = argArray.reduce(function(a, b) {
	  return a.concat(b);
		}, []);

		var counts = {};

		for(var i = 0; i< flattened.length; i++) {
		    var num = flattened[i];
		    counts[num] = counts[num] ? counts[num]+1 : 1;
		}

		var unitArr = [];

		for (var x in counts){
			// console.log(counts[x]);
			if(counts[x] == 1){
				unitArr.push(parseInt(x, 10));
			}
		}

	  return unitArr;
	}

	var finalArr = symDiff(arguments[0], arguments[1]);

	for(var i=2; i<arguments.length; i++){
		finalArr = symDiff(finalArr, arguments[i]);
	}

	return finalArr;

}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
