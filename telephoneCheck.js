
function telephoneCheck(str) {

	//ENSURE 10 OR 11 DIGITS
	//ENSURE IF 11 DIGITS, FIRST IS 1
  if (str.match(/\d/g).length===10 || str.match(/\d/g).length===11){

  	if(/^(1\s?)?(\(\d{3}\)|\d{3})[ -]*([0-9]{3})[- ]*([0-9]{4})$/.test(str)){
  		return true;
  	}
  	return false;

  } else return false;

}

console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));