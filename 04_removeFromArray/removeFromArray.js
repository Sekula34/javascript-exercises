/**
 * 
 * @param {Array} array 
 * @param {any} other 
 * @returns 
 */
const removeFromArray = function(array) {
	// if(Array.isArray(array) === false)
	// 	console.error("Not array");
	// console.log(array);
	for(let i = 1; i < arguments.length; i++)
	{
		let otherIndex = array.indexOf(arguments[i]);
		while(otherIndex != -1)
		{
			array.splice(otherIndex, 1);
			otherIndex = array.indexOf(arguments[i]);
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
