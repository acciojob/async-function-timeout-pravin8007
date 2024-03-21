async function dly(delay){
	return new Promise((resolve) => {
		setTimeout(resolve,delay);
	});
}
const msg = document.getElementById('output');
async function dd(){
	const text = document.getElementById('text').value;
	const delay = document.getElementById('delay').value;
    msg.innerText = '';
	await dly(delay);
	msg.innerText = text;
}

document.getElementById('btn').addEventListener('click',dd);