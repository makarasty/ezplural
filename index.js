/**
 * @param {number} num 
 * @returns {1|2|3}
 */
function getPluralFormPackIndex(num) {
	switch (true) {
		case (num % 10 === 1) && (num % 100 !== 11):
			return 0;
		case (num % 10 >= 2) && (num % 10 <= 4) && ((num % 100 < 10) || (num % 100 >= 20)):
			return 1;
		default:
			return 2;
	}
}

/**
 * @param {number} num 
 * @param {[string, string, string?]} formPack 
 * @returns {string} 
 * @example
 * const pack = ['слово', 'слова', 'слів']
 * 
 * getEzPlural(1, pack) // 'слово'
 * getEzPlural(34, pack) // 'слова'
 * getEzPlural(45, pack) // 'слів'
 */
function getEzPlural(num, formPack) {
	if (formPack.length === 2 && num > 1) {
		return formPack[1];
	}

	const index = getPluralFormPackIndex(num);

	return formPack[index];
}

module.exports = getEzPlural;