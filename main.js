let salt = {
	r1d: 'A2E371B0-B34B-48A5-8C40-A7133F3B5D88',
	others: 'd44fb0960aa0-a5e6-4a30-250f-6d2df50a'
};

function getSalt(sn) {
	if (!sn.includes('/')) {
		return salt.r1d;
	}
	return salt.others.split('-').reverse().join('-');
}

function calcPasswd(sn) {
	let passwd = sn + getSalt(sn);
	let hash = CryptoJS.MD5(passwd);
	return hash.toString();
}

function handleCalc() {
	let sn = document.getElementById('sn').value;
	let passwd = calcPasswd(sn).split('-').join('').substr(0, 8);
	document.getElementById('passwd').value = passwd;
	document.querySelector('.result.undetermined')?.classList.remove('undetermined');
}

window.addEventListener('load', () => {
	document.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		handleCalc();
	});
});
