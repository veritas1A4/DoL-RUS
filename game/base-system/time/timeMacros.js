/* eslint-disable no-undef */
function timeAfterXHours(hours) {
	const date = new DateTime(Time.date);
	date.addSeconds(hours * DateTime.secondsPerHour);
	return ampm(date.hour, date.minute);
}
DefineMacroS("timeAfterXHours", timeAfterXHours);

function ampm(hour, minute) {
	let ampm;
	hour = hour !== undefined ? hour : Time.hour;
	minute = minute !== undefined ? minute : Time.minute;
	if (V.options.timestyle === "ampm") {
		ampm = hour >= 12 ? " pm" : " am";
		hour = hour ? hour % 12 : 12;
	}
	return !ampm ? ("0" + getTimeString(hour, minute)).slice(-5) : getTimeString(hour, minute) + ampm;
}
DefineMacroS("ampm", ampm);

function advanceToHour() {
	passTime(60 - Time.minute);
}
DefineMacro("advancetohour", advanceToHour);

function passTimeUntil(hour, minute) {
	const diffHour = (24 - Time.hour + hour) % 24;
	const diffMinute = (60 + Time.minute - (minute || 0)) % 60;
	passTime(diffHour * 60 + diffMinute);
}
DefineMacro("passTimeUntil", passTimeUntil);

function passTime(time = 0, type = "min") {
	const multiplier = type.includes("sec")
		? 1
		: type.includes("hour")
		? DateTime.secondsPerHour
		: type.includes("day")
		? DateTime.secondsPerDay
		: type.includes("week")
		? 604800
		: DateTime.secondsPerMinute;
	Time.pass(time * multiplier);
}
DefineMacro("pass", passTime);

Macro.add("clock", {
	handler() {
		const minuteRot = Math.trunc((360 / 100) * ((Time.minute / 60) * 100));
		const hourRot = Math.trunc((360 / 100) * ((Time.hour / 12) * 100) + minuteRot / 12);

		const container = $("<div />", { class: "clockContainer" }).appendTo(this.output);
		const spinner = $("<div />", { class: "clockSpinner" }).appendTo(container);
		$("<div />", { class: "clockHand1" })
			.css({
				"-webkit-transform": "rotate(" + hourRot + "deg)",
				"-moz-transform": "rotate(" + hourRot + "deg)",
				transform: "rotate(" + hourRot + "deg)",
			})
			.appendTo(spinner);
		$("<div />", { class: "clockHand2" })
			.css({
				"-webkit-transform": "rotate(" + minuteRot + "deg)",
				"-moz-transform": "rotate(" + minuteRot + "deg)",
				transform: "rotate(" + minuteRot + "deg)",
			})
			.appendTo(spinner);
		$("<div />", { class: "clockCenter" }).appendTo(spinner);
	},
});

/* Text macros */

function schoolTerm() {
	if (Time.schoolTerm) {
		const date = Time.nextSchoolTermEndDate;
		return "School term finishes on " + date.weekDayName + " the " + ordinalSuffixOf(date.day) + " of " + date.monthName;
	} else {
		const date = Time.nextSchoolTermStartDate;
		return "School term starts on " + date.weekDayName + " the " + ordinalSuffixOf(date.day) + " of " + date.monthName;
	}
}
DefineMacroS("schoolterm", schoolTerm);
