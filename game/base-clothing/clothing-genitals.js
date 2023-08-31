/* For any item that has a colour_combat tag, set it to 0 if that item ever gets its own combat sprites. */
function initGenitals() {
	setup.clothes.genitals = [
		{
			index: 0,
			name: "naked",
			name_cap: "Naked",
			variable: "naked",
			integrity: 0,
			integrity_max: 0,
			fabric_strength: 0,
			reveal: 1,
			word: "n",
			plural: 0,
			colour: 0,
			colour_options: [],
			exposed: 1,
			exposed_base: 1,
			vagina_exposed: 1,
			vagina_exposed_base: 1,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["naked"],
			gender: "n",
			cost: 0,
			description: "naked",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			hideUnderLower: [],
			iconFile: 0,
			accIcon: 0,
			mainImage: 0,
		},
		{
			index: 1,
			name: "chastity belt",
			name_cap: "Chastity belt",
			variable: "chastitybelt",
			integrity: 2000,
			integrity_max: 2000,
			fabric_strength: 15,
			reveal: 1000,
			word: "a",
			one_piece: 0,
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["chastity", "hidden", "constricting"],
			anal_shield: 0,
			set: "genitals",
			gender: "f",
			femininity: 300,
			cost: 0,
			description: "Restrictive.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			penis_img: 0,
			high_img: 0,
			cursed: 1,
			location: 0,
			hideUnderLower: ["leotard bottom", "unitard bottom"],
			altDamage: "metal",
			iconFile: 0,
			accIcon: 0,
		},
		{
			index: 2,
			name: "chastity cage",
			name_cap: "Chastity cage",
			variable: "chastitycage",
			integrity: 2000,
			integrity_max: 2000,
			fabric_strength: 15,
			reveal: 1000,
			word: "a",
			one_piece: 0,
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			exposed: 1,
			exposed_base: 1,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["chastity", "cage"],
			anal_shield: null,
			set: "genitals",
			gender: "m",
			cost: 0,
			description: "Restrictive.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			penis_img: 0,
			high_img: 0,
			cursed: 1,
			location: 0,
			hideUnderLower: [
				"plain panties",
				"bikini bottoms",
				"lace panties",
				"briefs",
				"school swimsuit bottom",
				"school swim shorts",
				"leotard bottom",
				"unitard bottom",
				"skimpy leotard bottom",
				"foreign school swimsuit bottom",
				"swimsuit bottom",
				"bunny leotard bottom",
				"boyshorts",
				"catgirl panties",
				"G-string",
				"microkini bottom",
				"speedo",
				"striped panties",
				"thong",
				"classic plain panties",
				"classic bikini bottoms",
				"classic lace panties",
				"classic briefs",
				"classic school swimsuit bottom",
			],
			altDamage: "metal",
			iconFile: 0,
			accIcon: 0,
		},
		{
			index: 3,
			name: "gold chastity belt",
			name_cap: "Gold chastity belt",
			variable: "goldchastitybelt",
			integrity: 6000,
			integrity_max: 6000,
			fabric_strength: 15,
			reveal: 1000,
			word: "a",
			one_piece: 0,
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["chastity", "hidden", "constricting"],
			anal_shield: 0,
			set: "genitals",
			gender: "f",
			femininity: 300,
			cost: 0,
			description: "Luxurious and restrictive.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			penis_img: 0,
			high_img: 0,
			cursed: 1,
			location: 0,
			hideUnderLower: ["leotard bottom", "unitard bottom"],
			altDamage: "metal",
			iconFile: 0,
			accIcon: 0,
		},
		{
			index: 4,
			name: "fetish chastity belt",
			name_cap: "Fetish Chastity belt",
			variable: "chastitybeltfetish",
			integrity: 1500,
			integrity_max: 1500,
			fabric_strength: 12,
			reveal: 1000,
			word: "a",
			one_piece: 0,
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "white", "yellow", "tangerine", "cyan"],
			colour_sidebar: 1,
			colour_combat: 0,
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["chastity", "hidden", "constricting"],
			anal_shield: 0,
			set: "genitals",
			gender: "f",
			femininity: 300,
			cost: 10000,
			description: "Restrictive.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			penis_img: 0,
			high_img: 0,
			cursed: 0,
			location: 0,
			hideUnderLower: ["leotard bottom", "unitard bottom"],
			altDamage: "plastic",
			iconFile: "chastity_belt.png",
			accIcon: 0,
		},
		{
			index: 5,
			name: "fetish chastity cage",
			name_cap: "Fetish Chastity cage",
			variable: "chastitycagefetish",
			integrity: 1500,
			integrity_max: 1500,
			fabric_strength: 12,
			reveal: 10000,
			word: "a",
			one_piece: 0,
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: ["black", "grey", "blue", "brown", "green", "pink", "purple", "red", "yellow", "tangerine", "cyan"],
			colour_sidebar: 1,
			colour_combat: 0,
			exposed: 1,
			exposed_base: 1,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["chastity", "cage"],
			anal_shield: null,
			set: "genitals",
			gender: "m",
			cost: 10000,
			description: "Restrictive.",
			shop: [],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			penis_img: 0,
			high_img: 0,
			cursed: 0,
			location: 0,
			hideUnderLower: [
				"plain panties",
				"bikini bottoms",
				"lace panties",
				"briefs",
				"school swimsuit bottom",
				"school swim shorts",
				"leotard bottom",
				"unitard bottom",
				"skimpy leotard bottom",
				"foreign school swimsuit bottom",
				"swimsuit bottom",
				"bunny leotard bottom",
				"boyshorts",
				"catgirl panties",
				"G-string",
				"microkini bottom",
				"speedo",
				"striped panties",
				"thong",
				"classic plain panties",
				"classic bikini bottoms",
				"classic lace panties",
				"classic briefs",
				"classic school swimsuit bottom",
			],
			altDamage: "plastic",
			iconFile: 0,
			accIcon: "chastity_cage.png",
		},
		{
			index: 6,
			name: "small chastity cage",
			name_cap: "Small Chastity cage",
			variable: "smallchastitycage",
			integrity: 4000,
			integrity_max: 4000,
			fabric_strength: 20,
			reveal: 1000,
			word: "a",
			one_piece: 0,
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: ["pink"],
			colour_sidebar: 1,
			colour_combat: 0,
			exposed: 1,
			exposed_base: 1,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["chastity", "cage", "shrinking"],
			anal_shield: null,
			set: "genitals",
			gender: "m",
			cost: 0,
			description: "Heavily Restrictive.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			penis_img: 0,
			high_img: 0,
			cursed: 1,
			location: 0,
			hideUnderLower: [
				"plain panties",
				"bikini bottoms",
				"lace panties",
				"briefs",
				"school swimsuit bottom",
				"school swim shorts",
				"leotard bottom",
				"unitard bottom",
				"skimpy leotard bottom",
				"foreign school swimsuit bottom",
				"swimsuit bottom",
				"bunny leotard bottom",
				"boyshorts",
				"catgirl panties",
				"G-string",
				"microkini bottom",
				"speedo",
				"striped panties",
				"thong",
				"classic plain panties",
				"classic bikini bottoms",
				"classic lace panties",
				"classic briefs",
				"classic school swimsuit bottom",
			],
			altDamage: "metal",
			iconFile: 0,
			accIcon: 0,
		},
		{
			index: 7,
			name: "flat chastity cage",
			name_cap: "Flat Chastity cage",
			variable: "flatchastitycage",
			integrity: 6000,
			integrity_max: 6000,
			fabric_strength: 30,
			reveal: 1000,
			word: "a",
			one_piece: 0,
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: ["pink"],
			colour_sidebar: 1,
			colour_combat: 0,
			exposed: 1,
			exposed_base: 1,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["chastity", "cage", "shrinking"],
			anal_shield: null,
			set: "genitals",
			gender: "m",
			cost: 0,
			description: "Completely Restrictive.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			penis_img: 0,
			high_img: 0,
			cursed: 1,
			location: 0,
			hideUnderLower: [
				"plain panties",
				"bikini bottoms",
				"lace panties",
				"briefs",
				"school swimsuit bottom",
				"school swim shorts",
				"leotard bottom",
				"unitard bottom",
				"skimpy leotard bottom",
				"foreign school swimsuit bottom",
				"swimsuit bottom",
				"bunny leotard bottom",
				"boyshorts",
				"catgirl panties",
				"G-string",
				"microkini bottom",
				"speedo",
				"striped panties",
				"thong",
				"classic plain panties",
				"classic bikini bottoms",
				"classic lace panties",
				"classic briefs",
				"classic school swimsuit bottom",
			],
			altDamage: "metal",
			iconFile: 0,
			accIcon: 0,
		},
	];

	/*
		Clothes that modders add go into this array, this should be empty in the base game at all times.
		These items should have a `modder` variable with a the modders name in a short string
	*/
	setup.moddedClothes.genitals = [];

	setup.moddedClothes.genitals.forEach((x, i) => (x.index = setup.clothes.genitals.length + i));
	setup.clothes.genitals.push(...setup.moddedClothes.genitals);
}
window.initGenitals = initGenitals;