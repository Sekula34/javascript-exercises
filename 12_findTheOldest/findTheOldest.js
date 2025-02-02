/**
 * 
 * @param {Object} person 
 * @param {Object} oldest 
 */
function returnOldest(currentPerson, oldestPerson)
{
	const currentPersonAge = calculateAge(currentPerson);
	const oldestPersonAge = calculateAge(oldestPerson);
	if(currentPersonAge > oldestPersonAge)
		return currentPerson;
	return oldestPerson;
}
/**
 * 
 * @param {Object} person 
 * @returns {Number} age
 */
function calculateAge(person)
{
	const d = new Date();
	const currrentYear = d.getFullYear();
	if(Object.hasOwn(person, "yearOfBirth") == false)
		return 0;
	if(Object.hasOwn(person, "yearOfDeath"))
		return (person.yearOfDeath - person.yearOfBirth);
	return currrentYear - person.yearOfBirth;
}

/**
 * 
 * @param {Array} allPeople 
 */
const findTheOldest = function(allPeople) {
	let oldestPerson = allPeople[0]; 
	for(let i = 1; i < allPeople.length; i++)
	{
		oldestPerson = returnOldest(allPeople[i], oldestPerson);
	}
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
