const reverseString = function(str) {
	const len = str.length;
	let res = ""
	for(let i = len - 1; i >= 0; i-- )
	{
		res += str[i];
	}
	return res;

};

// Do not edit below this line
module.exports = reverseString;
