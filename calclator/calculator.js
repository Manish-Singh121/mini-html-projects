var Memory = 0;

function mc(form) {
	Memory = "";
}

function mPlus(form) {
	Memory = Number(Memory) + Number(form.display.value);
}

function mr(form) {
	form.display.value = Memory;
}

function ms(form) {
	Memory = form.display.value;
}

function addChar(form, character) {
	if (form.display.value == null || form.display.value == "0")
		form.display.value = character;
	else form.display.value += character;
}
function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function log(form) {
	form.display.value = Math.log10(form.display.value);
}

function log2(form) {
	form.display.value = Math.log2(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function x2(form) {
	form.display.value = Math.pow(form.display.value, 2);
}

function deleteChar(form) {
	let n = form.display.value.length - 1;
	form.display.value = form.display.value.substring(0, n);
}

function changeSign(form) {
	form.display.value = eval(form.display.value);
	if (form.display.value < 0)
		form.display.value = Math.abs(form.display.value);
	else form.display.value = -form.display.value;
}

function compute(form) {
	form.display.value = eval(form.display.value);
}

function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value);
}

function m_inverse(form) {
	form.display.value = 1 / form.display.value;
}

function factorial(form) {
	form.display.value = eval(form.display.value);

	var x = 1,
		i;

	for (i = 1; i <= form.display.value; i++) {
		x *= i;
	}

	form.display.value = x;
}
