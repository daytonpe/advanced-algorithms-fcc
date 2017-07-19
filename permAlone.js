function permut(string) {
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations

  for (var i=0; i<string.length; i++) {
      var char = string[i];

      // // Cause we don't want any duplicates:
      // if (string.indexOf(char) != i) // if char was used already
      //     continue;           // skip it this time

      var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

      for (var subPermutation of permut(remainingString))
          permutations.push(char + subPermutation)

  }
  return permutations;
}

function factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
    else {
        return (num * factorialize(num - 1));
    }
}

function permAlone(str) {

	if(str.length==1){
		return 1;
	}


	var perms = permut(str);

	for (var i=perms.length-1; i>=0; i--){
		if(/(\w)\1+/g.test(perms[i])){ 
			perms.splice(i,1);
		}
	}

  return perms.length;
}

console.log(permAlone("a"));
console.log(permut("aabb"));
