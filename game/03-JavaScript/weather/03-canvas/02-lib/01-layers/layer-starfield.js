/* eslint-disable no-undef */
Weather.Sky.Layers.add({
	name: "starField",
	zIndex: 1,
	blur: {
		max: 3,
		factor: () => (Weather.overcast > 0.4 ? (Weather.overcast - 0.4) / 0.6 : 0),
	},
	effects: [
		{
			effect: "skyStarField",
			drawCondition: () => Weather.Sky.orbitals.sun.factor < 0.75 && !Weather.Sky.skyDisabled,
			params: {
				area: 256,
				starsConfig: {
					minDistance: 10, // Min distance between stars in pixels
					count: 125,
					colorRange: ["#8272cc", "#b872f2", "#5f98b3", "#ffffff"],
				},
				pivot: { x: 76, y: 128 },
				rotationClockwise: true, // Set false for anti-clockwise
				opacity: {
					night: 0.85,
					day: 0,
					bloodMoon: 0.5,
				},
				spriteOptions: {
					square: {
						weight: 10, // Chance of square non-sprite 2x2 stars
					},
					star0: {
						weight: 0.2,
						glowSize: 5,
					},
					star1: {
						weight: 0.2,
						glowSize: 5,
					},
					star2: {
						weight: 0.08,
						glowSize: 5,
					},
					star3: {
						weight: 0.015,
						glowSize: 7,
						glowColor: "#ffffff",
					},
					star4: {
						weight: 0.01,
						randomColor: false,
						glowSize: 6,
						glowColor: "#4a3da4aa",
					},
				},
				// Chance of these appearing is set in the weights above
				images: {
					star0: "img/misc/sky/stars/star_0.png",
					star1: "img/misc/sky/stars/star_1.png",
					star2: "img/misc/sky/stars/star_2.png",
					star3: "img/misc/sky/stars/star_3.png",
					star4: "img/misc/sky/stars/star_4.png",
				},
			},
			bindings: {
				alpha() {
					const factor = Weather.Sky.orbitals.sun.factor;
					const nightAlpha = Weather.bloodMoon ? this.opacity.bloodMoon : this.opacity.night;
					return interpolate(nightAlpha, this.opacity.day, Math.max(0, factor));
				},
				rotation() {
					return Time.date.fractionOfDay * 360;
				},
				moonPosition() {
					return Weather.Sky.orbitals.moon.position;
				},
				moonDiameter() {
					return Weather.Sky.getLayer("moon").effects[0].images.orbital.width;
				},
			},
		},
	],
});
