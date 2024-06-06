/* For any item that has a colour_combat tag, set it to 0 if that item ever gets its own combat sprites.

Warmth checklist:
	Base: 0
	Covers mouth: +1
	Covers eyes: +1

	Materials
	Thin: -1
	Normal: 0
	Thick: +1

	Max warmth: 3
*/
function initFace() {
	setup.clothes.face = [
		{
			index: 0,
			name: "ничего",
			name_cap: "Ничего",
			variable: "naked",
			integrity: 10,
			integrity_max: 10,
			fabric_strength: 20,
			reveal: 1,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			type: ["naked"],
			gender: "n",
			warmth: 0,
			cost: 0,
			description: "ничего",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			mainImage: 0,
		},
		{
			index: 1,
			name: "очки",
			name_cap: "Очки",
			variable: "glasses",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "light blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "silver", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["glasses"],
			gender: "n",
			warmth: 0,
			cost: 5000,
			description: "Облегчает учебу, но к вам могут придраться в школе.",
			shop: ["clothing", "school"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "glasses.png",
			accIcon: 0,
		},
		{
			index: 2,
			name: "крутые солнцезащитные очки",
			name_cap: "Крутые солнцещитные очки",
			variable: "coolshades",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["cool"],
			gender: "n",
			warmth: 0,
			cost: 7000,
			description: "Ускоряет повышение статуса в школе.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "cool_shades.png",
			accIcon: 0,
		},
		{
			index: 3,
			name: "хирургическая маска",
			name_cap: "Хирургическая маска",
			variable: "surgicalmask",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["mask", "covered"],
			gender: "n",
			warmth: 1,
			cost: 2000,
			description: "Маскирует вашу личность.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "surgical_mask.png",
			accIcon: 0,
		},
		{
			index: 4,
			name: "кляп",
			name_cap: "Кляп",
			variable: "gag",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["fetish", "gag"],
			gender: "n",
			warmth: 0,
			cost: 2000,
			description: "Затрудняет речь.",
			shop: [""],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 1,
			location: 0,
			iconFile: "",
			accIcon: 0,
		},
		{
			index: 5,
			name: "повязка на глаза",
			name_cap: "Повязка на глаза",
			variable: "blindfold",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["fetish", "blindfold"],
			gender: "n",
			warmth: 1,
			cost: 2000,
			description: "Защищает глаза от света.",
			shop: [""],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 1,
			location: 0,
			iconFile: "",
			accIcon: 0,
		},
		{
			index: 6,
			name: "кляп и повязка на глаза",
			name_cap: "Кляп и повязка на глаза",
			variable: "gagblindfold",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1000,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["fetish", "gag", "blindfold"],
			gender: "n",
			warmth: 1,
			cost: 3000,
			description: "Затрудняет речь и защищает глаза от света.",
			shop: [""],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 1,
			location: 0,
			iconFile: "",
			accIcon: 0,
		},
		{
			index: 7,
			name: "Маска для жульничества",
			name_cap: "Маска для жульничества",
			variable: "skulmask",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["mask", "stealthy"],
			gender: "n",
			warmth: 1,
			cost: 23000,
			description: "Для тех, кто замышляет что-то нехорошее.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "skulduggery_mask.png",
			accIcon: 0,
		},
		{
			index: 8,
			name: "очки с низкой оправой",
			name_cap: "Очки с низкой оправой",
			variable: "lowframe",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["glasses"],
			gender: "n",
			warmth: 0,
			cost: 5000,
			description: "Облегчает учебу, но к вам могут придраться в школе.",
			shop: ["clothing", "school"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "low_frame_glasses.png",
			accIcon: 0,
		},
		{
			index: 9,
			name: "очки в форме полумесяца",
			name_cap: "Очки в форме полумесяца",
			variable: "halfmoon",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["glasses"],
			gender: "n",
			warmth: 0,
			cost: 5000,
			description: "Облегчает учебу, но к вам могут придраться в школе.",
			shop: ["clothing", "school"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "half_moon_glasses.png",
			accIcon: 0,
		},
		{
			index: 10,
			name: "очки с широкой оправой",
			name_cap: "Очки с широкой оправой",
			variable: "deepframe",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["glasses"],
			gender: "n",
			warmth: 0,
			cost: 5000,
			description: "Облегчает учебу, но к вам могут придраться в школе.",
			shop: ["clothing", "school"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "deep_frame_glasses.png",
			accIcon: 0,
		},
		{
			index: 11,
			name: "квадратные солнцещитные очки",
			name_cap: "Квадратные солнцещитные очки",
			variable: "square",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["cool"],
			gender: "n",
			warmth: 0,
			cost: 7000,
			description: "Ускоряет повышение статуса в школе.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "square_shades.png",
			accIcon: 0,
		},
		{
			index: 12,
			name: "круглые солнцещитные очки",
			name_cap: "Круглые солнцещитные очки",
			variable: "round",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["cool"],
			gender: "n",
			warmth: 0,
			cost: 7000,
			description: "Ускоряет повышение статуса в школе.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "round_shades.png",
			accIcon: 0,
		},
		{
			index: 13,
			name: "защитные солнцещитные очки",
			name_cap: "Защитные солнцещитные очки",
			variable: "shield",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["cool"],
			gender: "n",
			warmth: 0,
			cost: 7000,
			description: "Ускоряет повышение статуса в школе.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "shield_shades.png",
			accIcon: 0,
		},
		{
			index: 14,
			name: "очки «кошачий глаз»",
			name_cap: "Очки «кошачий глаз»",
			variable: "cateye",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["cool"],
			gender: "n",
			warmth: 0,
			cost: 7000,
			description: "Ускоряет повышение статуса в школе.",
			shop: ["clothing", "adult"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "cat_eye_shades.png",
			accIcon: 0,
		},
		{
			index: 15,
			name: "авиаторы",
			name_cap: "Авиаторы",
			variable: "aviator",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["grey", "steel", "blue steel", "bronze", "gold", "silver", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["cool"],
			gender: "n",
			warmth: 0,
			cost: 7000,
			description: "Ускоряет повышение статуса в школе.",
			shop: ["clothing", "adult"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["original", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "aviators.png",
			accIcon: 0,
		},
		{
			index: 16,
			name: "очки настоящего панка",
			name_cap: "Очки настоящего панка",
			variable: "punk",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["cool"],
			gender: "n",
			warmth: 0,
			cost: 3500,
			description: "Ускоряет повышение статуса в школе.",
			shop: ["clothing", "adult"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "punk_shades.png",
			accIcon: 0,
		},
		{
			index: 17,
			name: "намордник",
			name_cap: "Намордник",
			variable: "muzzle",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["gag"],
			gender: "n",
			warmth: 0,
			cost: 0,
			description: "Держит ваш кусачий рот под замком.",
			shop: [""],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 1,
			location: 0,
			iconFile: "",
			accIcon: 0,
		},
		{
			index: 18,
			name: "бинты мумии на лицо",
			name_cap: "Бинты мумии на лицо",
			variable: "mummy",
			integrity: 10,
			integrity_max: 10,
			fabric_strength: 1,
			reveal: 1,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "white",
			type: ["costume"],
			gender: "n",
			warmth: 1,
			cost: 500,
			description: "Такое ощущение, что они сделаны из туалетной бумаги.",
			shop: ["forest"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "mummy_facewrap.png",
			accIcon: 0,
		},
		{
			index: 19,
			name: "очки для плавания",
			name_cap: "Очки для плавания",
			variable: "swimgoggles",
			integrity: 70,
			integrity_max: 70,
			fabric_strength: 25,
			reveal: 1,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["swim", "diving"],
			gender: "n",
			warmth: 1,
			cost: 1500,
			description: "Сохраняет ясность вашего зрения под водой.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "swimming_goggles.png",
			accIcon: 0,
		},
		{
			index: 20,
			name: "вуаль танцовщицы",
			name_cap: "Вуаль танцовщицы",
			variable: "belly",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["dance"],
			gender: "n",
			warmth: 0,
			cost: 8000,
			description: "Экзотическая и манящая.",
			shop: ["forest"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "belly_dancers_veil.png",
			accIcon: "belly_dancers_veil_acc.png",
		},
		{
			index: 21,
			name: "намордник",
			name_cap: "Намордник",
			variable: "muzzlefetish",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["grey", "black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["gag", "fetish", "covered"],
			gender: "n",
			warmth: 0,
			cost: 12000,
			description: "Держит ваш кусачий рот под замком.",
			shop: ["adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "muzzle.png",
			accIcon: 0,
		},
		{
			index: 22,
			name: "кляп",
			name_cap: "Кляп",
			variable: "gagfetish",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["fetish", "gag"],
			gender: "n",
			warmth: 0,
			cost: 8000,
			description: "Затрудняет речь.",
			shop: ["adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "gag.png",
			accIcon: 0,
		},
		{
			index: 23,
			name: "маленький кляп",
			name_cap: "Маленький кляп",
			variable: "bitgag",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["fetish", "gag"],
			gender: "n",
			warmth: 0,
			cost: 2000,
			description: "Затрудняет речь.",
			shop: [""],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 1,
			location: 0,
			iconFile: "bit_gag.png",
			accIcon: 0,
		},
		{
			index: 24,
			name: "волчий намордник",
			name_cap: "Волчий намордник",
			variable: "wolfmuzzle",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["fetish", "gag"],
			gender: "n",
			warmth: 1,
			cost: 8000,
			description: "Держит ваш кусачий рот под замком.",
			shop: [],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 1,
			location: 0,
			iconFile: "wolf_muzzle.png",
			accIcon: 0,
		},
		{
			index: 25,
			name: "кошачий намордник",
			name_cap: "Кошачий намордник",
			variable: "kittymuzzle",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["fetish", "gag"],
			gender: "n",
			warmth: 1,
			cost: 8000,
			description: "Держит ваш кусачий рот под замком.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 1,
			location: 0,
			iconFile: "kitty_muzzle.png",
			accIcon: 0,
		},
		{
			index: 26,
			name: "тканевой кляп",
			name_cap: "Тканевой кляп",
			variable: "clothgag",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["fetish", "gag"],
			gender: "n",
			warmth: 1,
			cost: 500,
			description: "Затрудняет речь.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "cloth_gag.png",
			accIcon: 0,
		},
		{
			index: 27,
			name: "кляп из трусиков",
			name_cap: "Кляп из трусиков",
			variable: "pantygag",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["fetish", "gag"],
			gender: "n",
			warmth: 0,
			cost: 500,
			description: "Заполняет ваш рот вкусом детства.", /* Со вкусом морепродуктов (Извините) */
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "panty_gag.png",
			accIcon: 0,
		},
		{
			index: 28,
			name: "изолента",
			name_cap: "Изолента",
			variable: "tapegag",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["fetish", "gag"],
			gender: "n",
			warmth: 0,
			cost: 500,
			description: "Спонсор успешного изнасилования.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "tape_gag.png",
			accIcon: 0,
		},
		{
			index: 29,
			name: "кляп с дилдо",
			name_cap: "Кляп с дилдо",
			variable: "penisgag",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["fetish", "gag"],
			gender: "n",
			warmth: 0,
			cost: 4500,
			description: "Заполняет стенки горла знакомым рельефом.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 1,
			location: 0,
			iconFile: "penis_gag.png",
			accIcon: 0,
		},
		{
			index: 30,
			name: "маска скелета",
			name_cap: "Маска скелета",
			variable: "skele",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["costume", "mask"],
			gender: "n",
			warmth: 1,
			cost: 2500,
			description: "На случай, когда колом стоит вопрос что выбрать.", /* For when you've a bone to pick. / bone — кость, boner — стояк, попытался адаптировать, но первичный гэг утерян */
			shop: ["forest"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "skeleton_mask.png",
			accIcon: 0,
		},
		{
			index: 31,
			name: "esoteric spectacles", /* WIP, надо посмотреть in-game */
			name_cap: "Esoteric spectacles",
			variable: "esoteric",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: "black",
			type: ["glasses", "esoteric"],
			gender: "n",
			warmth: 0,
			cost: 50000,
			description: "Spectacles of the hookah master.",
			shop: ["forest"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "glasses.png",
			accIcon: 0,
		},
		{
			index: 32,
			name: "противогаз",
			name_cap: "Противогаз",
			variable: "gasmask",
			integrity: 300,
			integrity_max: 300,
			fabric_strength: 25,
			reveal: 1,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "brown", "tan", "olive", "sand", "grey", "white", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["mask", "covered", "costume"],
			gender: "n",
			warmth: 3,
			cost: 20000,
			description: "Скрывает вашу личность, но повышает внимание окружающих.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "gas_mask.png",
			accIcon: "gas_mask_acc.png",
		},
		{
			index: 33,
			name: "повязка на глаз",
			name_cap: "Повязка на глаз",
			variable: "eyepatch",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "an",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["costume"],
			gender: "n",
			warmth: 0,
			cost: 1000,
			description: "Для покорения морей и океанов.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "eyepatch.png",
			accIcon: 0,
		},
		{
			index: 34,
			name: "медицинская повязка на глаз",
			name_cap: "Медицинская повязка на глаз",
			variable: "medical eyepatch",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "an",
			plural: 1,
			colour: 0,
			colour_options: ["black", "white", "grey", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["costume"],
			gender: "n",
			warmth: 0,
			cost: 1000,
			description: "На случай крайней необходимости,.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "medical_eyepatch.png",
			accIcon: 0,
		},
		{
			index: 35,
			name: "Собачий намордник",
			name_cap: "Собачий намордник",
			variable: "doggymuzzle",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			colour_combat: 0,
			type: ["gag", "fetish", "covered"],
			gender: "n",
			warmth: 1,
			cost: 16000,
			description: "Держит ваш кусачий рот под замком.",
			shop: ["adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "doggymuzzle.png",
			accIcon: 0,
		},

		{
			index: 36,
			name: "бамбуковый кляп",
			name_cap: "Бамбуковый кляп",
			variable: "bamboomuzzle",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			colour_combat: 0,
			type: ["gag", "fetish", "covered"],
			gender: "n",
			warmth: 0,
			cost: 10000,
			description: "Предотвращает акты каннибализма.", /* Отсылка на Незуко из Demon Slayer. / Кто переведёт лучше, получит шоколадку :3 */
			shop: ["adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "bamboomuzzle.png",
			accIcon: 0,
		},
		{
			index: 37,
			name: "монокль",
			name_cap: "Монокль",
			variable: "monocle",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "grey", "steel", "blue steel", "bronze", "gold", "silver"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["glasses", "formal"],
			gender: "n",
			warmth: 0,
			cost: 10000,
			description: "Облегчает учебу, но к вам могут придраться в школе.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "monocle.png",
			accIcon: "monocle_acc.png",
		},
		{
			index: 38,
			name: "маска туземца",
			name_cap: "Маска туземца",
			variable: "islandermask",
			integrity: 50,
			integrity_max: 50,
			fabric_strength: 20,
			reveal: 1,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			type: ["mask", "covered", "costume"],
			colour_combat: 0,
			gender: "n",
			warmth: 2,
			cost: 5000,
			description: "Носят туземцы.",
			shop: ["forest"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "islander_mask.png",
			accIcon: 0,
		},
		{
			index: 39,
			name: "очки для чтения",
			name_cap: "Очки для чтения",
			variable: "reading",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "light blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "silver", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["glasses"],
			gender: "n",
			warmth: 0,
			cost: 5000,
			description: "Облегчает учебу, но к вам могут придраться в школе.",
			shop: ["clothing", "school"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "reading_glasses.png",
			accIcon: 0,
		},
		{
			index: 40,
			name: "бандана",
			name_cap: "Бандана",
			variable: "bandanna",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 1,
			word: "a",
			plural: 1,
			colour: 0,
			colour_options: ["black", "light blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "yellow", "silver", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["mask", "covered"],
			gender: "n",
			warmth: 1,
			cost: 500,
			description: "Маскирует вашу личность.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "bandanna.png",
			accIcon: 0,
		},
		{
			index: 41,
			name: "солнцезащитные очки в форме сердечкек",
			name_cap: "Солнцезащитные в форме очки сердечкек",
			variable: "heartsunglasses",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["cool"],
			gender: "n",
			warmth: 0,
			cost: 7000,
			description: "Ускоряет повышение статуса в школе.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [
				"light pink",
				"lilac",
				"olive",
				"gold",
				"black",
				"blue",
				"brown",
				"green",
				"pink",
				"purple",
				"red",
				"tangerine",
				"teal",
				"white",
				"yellow",
				"neon blue",
				"custom",
			],
			accessory_colour_sidebar: 1,
			altposition: "none",
			altdisabled: [],
			cursed: 0,
			location: 0,
			iconFile: "heart_sunglasses.png",
			accIcon: "heart_sunglasses_acc.png",
		},
	];

	/*
		Clothes that modders add go into this array, this should be empty in the base game at all times.
		These items should have a `modder` variable with a the modders name in a short string
	*/
	setup.moddedClothes.face = [];

	setup.moddedClothes.face.forEach((x, i) => (x.index = setup.clothes.face.length + i));
	setup.clothes.face.push(...setup.moddedClothes.face);
}
window.initFace = initFace;
