const sumAll = function(startNumber, endNumber) {
	let sum = 0;
	if(Number.isInteger(startNumber) == false || Number.isInteger(endNumber) == false || startNumber < 0 || endNumber < 0)
		return "ERROR";
	if(startNumber > endNumber)
	{
		const temp = startNumber;
		startNumber = endNumber;
		endNumber = temp;
	}
	for(let i = startNumber; i<=endNumber; i++)
	{
		sum += i;
	}
	return sum;

};

// Do not edit below this line
module.exports = sumAll;
