function pairwise(arr, arg) {
	var indArr = [];
	var pairArr = [];
	for (var i in arr){
		// for (var j = arr.length-1; j>=0; j--){
		for (var j in arr){
			if (j==i){continue;}

			if (arr[j]+arr[i]==arg){
				pairArr.push([j,i]);
			}
		}
	}

	for (var k in pairArr){

		if (indArr.includes(pairArr[k][0]) || indArr.includes(pairArr[k][1])){
			continue;
		}

		indArr.push(pairArr[k][0]);
		indArr.push(pairArr[k][1]);
	}

	var sum = indArr.reduce(function(a, b) {
	  return a + parseInt(b,10);
	}, 0);


  return sum;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));