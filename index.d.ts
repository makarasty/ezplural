declare module "ez-plural" {
	type ArrayTwoOrThreeValues = [string, string, string?];

	function plural(num: number, formPack: ArrayTwoOrThreeValues): string;

	export default plural;
}