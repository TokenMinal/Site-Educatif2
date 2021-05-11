const num1 = document.getElementById('pog');
const num2 = document.getElementById('pog2');
const awnser = document.getElementById('awnser');
const input	= document.getElementById('poggers');
const button = document.getElementById('pepega');

const num11 = Math.floor(Math.random() * 12) + 1;
const num22 = Math.floor(Math.random() * 12) + 1;
awnser.textContent = num11 * num22;

num1.textContent = num11;
num2.textContent = num22;
// enter go brrrrr
window.addEventListener('keydown', (e) => {
	if(e.key === 'Enter' && input.value == awnser.textContent) {
		awnser.textContent = 'gaming';
	}
});
// button go brrr
button.addEventListener('click', () => {
	if(input.value == awnser.textContent) {
		awnser.textContent = 'gaming';
	}
	else{
		awnser.textContent = 'anger, hatred, malice if youre so enclined';
	}
});