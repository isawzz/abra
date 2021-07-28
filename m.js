
function mDiv(dParent, styles, id, inner, classes) {
	let d = mCreate('div');
	if (dParent) mAppend(dParent, d);
	if (isdef(styles)) mStyleX(d, styles);
	if (isdef(classes)) mClass(d, ...classes);
	if (isdef(id)) d.id = id;
	if (isdef(inner)) d.innerHTML = inner;
	return d;
}
