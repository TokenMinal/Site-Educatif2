const num1 = document.getElementById('pog');
const num2 = document.getElementById('pog2');
const awnser = document.getElementById('awnser');
const input	= document.getElementById('poggers')

num11 = Math.floor(Math.random() * 12) + 1;
num22 = Math.floor(Math.random() * 12) + 1;
awnser.textContent = num11 + num22;

num1.textContent = num11;
num2.textContent = num22;


window.addEventListener("keydown", function(e) {
	if(key == 13){ 
		num1.textContent = "gaming"
	}
});