onload = start

function start() {
	let di = extractColorsFromCss();
	console.log('di', di);
}

function orig() {
	let cssArr = [...styles[0].cssRules].map(x => ({
		class: x.selectorText,
		color: rgbToHex(x.style.color),
		background: rgbToHex(x.style.background),
	}));

	let genCssStr = ''; cssArr.forEach(x => genCssStr += `
	${x.class} {
		${(x.background ? 'background: ' + x.background : '')}
		${(x.color ? 'color: ' + x.color : '')}
	}
	`.replace(/^  \n/gm, '')); // remove empty lines 

	console.log("array:", JSON.stringify(cssArr));
	console.log("text:\n", genCssStr);
}




