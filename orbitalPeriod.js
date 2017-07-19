function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var finalArr = [];
  
  for (var i in arr){
	  var a = arr[i].avgAlt+earthRadius;
	  var t = Math.round(2*Math.PI*Math.sqrt(Math.pow(a,3)/(GM)));
	  finalArr.push({name : arr[i].name, orbitalPeriod : t});
  }

  return finalArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
// console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));