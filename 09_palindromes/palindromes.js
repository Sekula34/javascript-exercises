
function remove(str) {
    return str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '');
}


/**
 * 
 * @param {String} str 
 */
const palindromes = function (str) {
	
	let trimmed = str.trim(); 
	trimmed = trimmed.toLowerCase(); 
	trimmed = remove(trimmed);
	
	let reverse = trimmed.split('').reverse().join('');
	if(trimmed == reverse)
		return true;
	return false;
};

// Do not edit below this line
module.exports = palindromes;
