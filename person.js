
var Person = function(firstAndLast) {
	var nameArray = firstAndLast.split(' ');
	console.log(nameArray);
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return nameArray.join(' ');
    };

    this.getLastName = function() {
    	return nameArray[1];
    }

    this.getFirstName = function() {
    	return nameArray[0];
    }


    this.setFirstName = function(str) {
    	nameArray[0] = str;
    	return nameArray[0];
    }

    this.setLastName = function(str) {
    	nameArray[1] = str;
    	return nameArray[1];
    }

    this.setFullName = function(str) {
    	var newNameArray = str.split(' ');
    	nameArray[0] = newNameArray[0];
    	nameArray[1] = newNameArray[1];
    	return newNameArray.join(' ');
    }

    return firstAndLast;
};

var bob = new Person('Bob Ross');

console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());

console.log(bob.setFirstName('Jim'));
console.log(bob.setLastName('Beam'));
console.log(bob.setFullName('Patrick Stewart'));