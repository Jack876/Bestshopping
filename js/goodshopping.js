/*var container = document.getElementById('container');

var buttons = document.getElementById('buttons').getElementsByTagName('span');
*/
var next = document.getElementById('next');
var list = document.getElementById('list');
var prev = document.getElementById('prev');

function animate(offset){
	//list.setAttribute("left","-810px");
	//alert(list.offsetLeft);
	//alert("old"+list.style.left);
	list.style.left = parseInt(list.style.left) + offset + "px";
	alert("new"+list.style.left);
	//alert("new"+list.offsetLeft);
	//list.style.left = "-810px";
	//alert(list.offsetLeft);
	//list.style.left = "-810px"
	if (parseInt(list.style.left) < -2430 ) {
		list.style.left = 0 + "px";
		}
	if (parseInt(list.style.left) > 0 ) {
		//parseInt(list.style.left) = -2430;
		list.style.left = -2430 + "px";
		}
	}

prev.onclick = function(){
	animate(-810)
	}
next.onclick = function(){
	index += 1;
	showButton();
	animate(810)
	}
	
var index = 1;
function showButton(){
	buttons[index-1].className = "on";
	}
/*prev.onclick = function(){
	list.style.left = parseInt(list.style.left) + 600 + 'px'
	}*/
	
	//  parseInt(list.style.left)   alert("panda!")






// JavaScript Document