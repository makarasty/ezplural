declare module "ezplural" {
	type ArrayTwoOrThreeValues = [string, string, string?];

	function plural(num: number, formPack: ArrayTwoOrThreeValues): string;
}
