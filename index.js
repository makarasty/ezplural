/**
 * @param {number} num
 * @returns {0|1|2}
 */
function getPluralFormPackIndex(num) {
	const p10 = num % 10;
	const p100 = num % 100;

	if (p10 === 1 && p100 !== 11) return 0;
	if (p10 >= 2 && p10 <= 4 && (p100 < 10 || p100 >= 20)) return 1;
	return 2;
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
	return formPack[formPack.length === 2 ? +(num > 1) : getPluralFormPackIndex(num)];
}

module.exports = getEzPlural;