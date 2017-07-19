function checkCashRegister(price, cash, cid) {
  var changeOwed = Math.round((cash - price)*100)/100;
  var cidSum = 0;

  var denom = [
  	{ name: 'PENNY', val: .01},
  	{ name: 'NICKEL', val: .05},
  	{ name: 'DIME', val: .1},
  	{ name: 'QUARTER', val: .25},
  	{ name: 'ONE', val: 1},
  	{ name: 'FIVE', val: 5},
  	{ name: 'TEN', val: 10},
  	{ name: 'TWENTY', val: 20},
  	{ name: 'ONE HUNDRED', val: 100}
  	]

  for (var i in cid){
  	cidSum += cid[i][1];
  }

  cidSum = Math.round(cidSum*100)/100;

  if (changeOwed == cidSum){
  	return 'Closed';
  } 

  else {

  	var change = [];

  	// BUILD CHANGE ARRAY
  	for(var j = cid.length-1; j>=0; j--){
  		changeOwed = Math.round(changeOwed*100)/100;


  		var coinVal = denom[j].val; //VALUE OF SPECIFIC COIN
  		var coinName = denom[j].name;
  		var denomTotal = cid[j][1]; //TOTAL AMOUNT OF THIS DENOMINATION

  		// CAN WE DECREASE THE CHANGE WOED WITH THIS DENOMINATION?
  		// console.log('if '+changeOwed+' >= ' +  coinVal);
  		if(changeOwed>=coinVal){
  			
  			// HOW MANY OF THIS DENOMINATION WILL FIT IN REMAINING CHANGE?
  			var numCoins = Math.floor(changeOwed/coinVal);
  			// console.log(numCoins);

  			if(numCoins*coinVal > denomTotal){
	
	  			// PUSH REMAINDER OF THAT DENOMINATION INTO ARRAY
	  			change.push([coinName, denomTotal])
	  			// DECREASE REMAINING changeOwedERENCE
	  			changeOwed -= denomTotal;

  			} else{

	  			// PUSH FULL AMMOUNT IT INTO ARRAY
	  			change.push([coinName, numCoins*coinVal]);
	  			// DECREASE REMAINING changeOwedERENCE
	  			changeOwed -= numCoins*coinVal;

  			}


  		}



  	}
		if (changeOwed > .001){
			//COULDN'T MAKE PROPER CHANGE
			console.log(changeOwed);
			return 'Insufficient Funds';
		}else return change;
	}
}


console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));


