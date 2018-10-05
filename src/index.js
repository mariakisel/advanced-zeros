module.exports = function getZerosCount(number, base) {

  let m = argument(base),
	  counter = 0;
  for (var get = m; number/m >= 1; m *= get)
    counter += Math.floor(number/m);
  return counter;
}




function argument(base){
	let counter = [],
	 number = base,
	 number1 = number,
	 get1 = 2;
	while(number1 != 1){
		if(number1 % get1 != 0){
			get1++;
		}
		else{
			number1 = number1 / get1;
			counter.push(get1);
		}
	}
	let max = counter[0];
	for(var i = 0; i < counter.length; i++){
		if(max < counter[i]){
			max = counter[i];
		}
	}
	return max;
}




