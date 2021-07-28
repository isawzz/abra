function qOptions(bg = BLUEGREEN) {
	let options = {
		bCaption: '☰',
		bStyles: { fz: 30, margin: 4 },
		menuStyles: { bg: wblack, alpha: .75 },
		sbStyles: { bg: wblack, alpha: .25 },
		divStyles: { bg: wwhite, alpha: .25 },
		innerStyles: {},
		outerStyles: { bg: bg },
	};
	return options;

}
function iSidebar(d1, d2, dToggle = null, w = 100, startOpen = true, id) {
	//iSidebar(d, dSide, dContent, b, 120, false);
	mStyleX(d1, { h: '100%', w: startOpen == true ? w : 0, position: 'absolute', z: 1, top: 0, left: 0, overflow: 'hidden', transition: '0.5s' });
	//let dContent = mDiv(d1, { w: 'auto' });
	mStyleX(d2, { h: '100%', maleft: startOpen == true ? w : '0px', box: true, transition: '0.5s' }, null, null);

	d1.isOpen = startOpen;
	let fToggle = () => {
		d1.isOpen = !d1.isOpen;
		let wOpen = valf(d1.wNeeded, w)
		let val = d1.isOpen ? wOpen : 0;
		mStyleX(d1, { w: val }); mStyleX(d2, { maleft: val });
		// console.log('d1.isOpen', d1.isOpen, 'wOpen', wOpen)
	}
	let fOpen = () => {
		if (d1.isOpen) return;
		fToggle();
	}
	let fClose = () => {
		if (!d1.isOpen) return;
		fToggle();
	}
	let fReplaceContent = cont => {
		//if (!d1.isOpen) fOpen();
		d1.style.width = 'auto'; //need to measure content!
		d1.innerHTML = cont;
		let wNeeded = d1.wNeeded = getRect(d1).w;
		d1.wCurrent = d1.style.width = makeUnitString(wNeeded); //Math.max(wCurrent, wNeeded));
		console.log('now wNeeded is', d1.wNeeded);
		if (!d1.isOpen) d1.style.width = 0;
	};
	let fAddContent = cont => {
		//if (!d1.isOpen) fOpen();
		d1.style.width = 'auto'; //need to measure content!
		mAppend(d1, isString(cont) ? mText(cont, d1) : cont);
		let wNeeded = d1.wNeeded = getRect(d1).w;
		d1.wCurrent = d1.style.width = makeUnitString(wNeeded); //Math.max(wCurrent, wNeeded));
		console.log('now wNeeded is', d1.wNeeded);
		if (!d1.isOpen) d1.style.width = 0;
	};

	id = isdef(id) ? id : !isEmpty(d1.id) ? d1.id : getUID('sb');
	//console.log('making a sidebar with id:', id)

	let item = mItem(id, { div: d1 }, { type: 'sidebar', w: w, toggle: fToggle, open: fOpen, close: fClose, addContent: fAddContent, replaceContent: fReplaceContent });
	console.log('item', item)
	// d1.item = item; d1.id = item.id;
	// item.toggle = fToggle;
	// item.open = fOpen;
	// item.close = fClose;
	// item.addContent = fAddContent;
	// item.replaceContent = fReplaceContent;
	// item.w = w;
	if (!isEmpty(d2.id)) item.idContent = d2.id;
	if (isdef(dToggle)) { iAdd(item, { dToggle: dToggle }); dToggle.onclick = fToggle; }
	return item;
}













function iButtonSidebarDiv(dParent, bCaption = '☰', bStyles = { fz: 30 }, sbStyles = { bg: wpink }, divStyles = {}, outerStyles = { matop: 4, bg: wgrey }) {

	let d0 = mDiv100(dParent);

	//let dMenu = mDiv(d0);
	let b = mButton(bCaption, null, d0, bStyles, 'mybutton', getUID('b'));

	outerStyles.position = 'relative';
	//let d = mDiv100(dMain, { matop: 4, position: 'relative', });
	let h = getRect(d0).h - (getRect(b).h + outerStyles.matop);
	outerStyles.h = h;

	let d = mDiv(d0, outerStyles); //mStyleX(d, { h: h })

	let dSide = mDiv(d, sbStyles);
	let dContent = mDiv(d, divStyles, getUID());

	let sb = iSidebar(dSide, dContent, b, 120, false);

	let item = mItem(getUID('comp'), { div: d0, button: b, sidebar: sb, dContent: dContent }, { type: 'component' });
	return item;
}
