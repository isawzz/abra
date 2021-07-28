var Items = {};
var DA = {}

//#region colors
var ColorNames; //see base.js colors

const wamber = '#ffc107';
const waqua = '#00ffff';
const wblack = '#000000';
const wblue = '#2196f3';
const wbluegrey = '#607d8b';
const wbluegray = '#607d8b';
const wbrown = '#795548';
const wcyan = '#00bcd4';
const wdarkgrey = '#616161';
const wdeeporange = '#ff5722';
const wdeeppurple = '#673ab7';
const wgreen = '#4caf50';
const wgrey = '#9e9e9e';
const windigo = '#3f51b5';
const wkhaki = '#f0e68c';
const wlightblue = '#87ceeb';
const wlightgreen = '#8bc34a';
const wlight = '#f1f1f1';
const wlime = '#cddc39';
const worange = '#ff9800';
const wpaleblue = '#ddffff';
const wpalegreen = '#ddffdd';
const wpalered = '#ffdddd';
const wpaleyellow = '#ffffcc';
const wpink = '#e91e63';
const wpurple = '#9c27b0';
const wred = '#f44336';
const wsand = '#fdf5e6';
const wteal = '#009688';
const wwhite = '#ffffff';
const wyellow = '#ffeb3b';

const BLUE = '#4363d8';
const BLUEGREEN = '#004054';
const BROWN = '#96613d';
const GREEN = '#3cb44b';
const FIREBRICK = '#800000';
const LIGHTGREEN = '#afff45'; //'#bfef45';
const LIGHTBLUE = '#42d4f4';
const OLIVE = '#808000';
const ORANGE = '#f58231';
const PURPLE = '#911eb4';
const RED = '#e6194B';
const TEAL = '#469990';
const YELLOW = '#ffe119';
const YELLOW2 = '#fff620'; //?pink???
const YELLOW3 = '#ffed01';

const ColorList = ['lightgreen', 'lightblue', 'yellow', 'red', 'green', 'blue', 'purple', 'violet', 'lightyellow',
	'teal', 'orange', 'brown', 'olive', 'deepskyblue', 'deeppink', 'gold', 'black', 'white', 'grey'];
const ColorDict = {
	black: { c: 'black', E: 'black', D: 'schwarz' },
	blue: { c: 'blue', E: 'blue', D: 'blau' },
	BLUE: { c: '#4363d8', E: 'blue', D: 'blau' },
	BLUEGREEN: { c: BLUEGREEN, E: 'bluegreen', D: 'blaugrün' },
	blue1: { c: BLUE, E: 'blue', D: 'blau' },
	BROWN: { c: BROWN, E: 'brown', D: 'braun' },
	deepyellow: { c: YELLOW3, E: 'yellow', D: 'gelb' },
	FIREBRICK: { c: '#800000', E: 'darkred', D: 'rotbraun' },
	gold: { c: 'gold', E: 'gold', D: 'golden' },
	green: { c: 'green', E: 'green', D: 'grün' },
	GREEN: { c: '#3cb44b', E: 'green', D: 'grün' },
	green1: { c: GREEN, E: 'green', D: 'grün' },
	grey: { c: 'grey', E: 'grey', D: 'grau' },
	lightblue: { c: LIGHTBLUE, E: 'lightblue', D: 'hellblau' },
	LIGHTBLUE: { c: '#42d4f4', E: 'lightblue', D: 'hellblau' },
	lightgreen: { c: LIGHTGREEN, E: 'lightgreen', D: 'hellgrün' },
	LIGHTGREEN: { c: '#afff45', E: 'lightgreen', D: 'hellgrün' },
	lightyellow: { c: YELLOW2, E: 'lightyellow', D: 'gelb' },
	olive: { c: OLIVE, E: 'olive', D: 'oliv' },
	OLIVE: { c: '#808000', E: 'olive', D: 'oliv' },
	orange: { c: ORANGE, E: 'orange', D: 'orange' },
	ORANGE: { c: '#f58231', E: 'orange', D: 'orange' },
	pink: { c: 'deeppink', E: 'pink', D: 'rosa' },
	purple: { c: PURPLE, E: 'purple', D: 'lila' },
	PURPLE: { c: '#911eb4', E: 'purple', D: 'lila' },
	red: { c: 'red', E: 'red', D: 'rot' },
	RED: { c: '#e6194B', E: 'red', D: 'rot' },
	red1: { c: RED, E: 'red', D: 'rot' },
	skyblue: { c: 'deepskyblue', E: 'skyblue', D: 'himmelblau' },
	teal: { c: TEAL, E: 'teal', D: 'blaugrün' },
	TEAL: { c: '#469990', E: 'teal', D: 'blaugrün' },
	violet: { c: 'indigo', E: 'violet', D: 'violett' },
	white: { c: 'white', E: 'white', D: 'weiss' },
	yellow: { c: 'yellow', E: 'yellow', D: 'gelb' },
	YELLOW: { c: '#ffe119', E: 'yellow', D: 'gelb' },
	YELLOW2: { c: YELLOW2, E: 'yellow', D: 'gelb' },
	YELLOW3: { c: YELLOW3, E: 'yellow', D: 'gelb' },
};

//#endregion




