/*var container = document.getElementById('container');

var buttons = document.getElementById('buttons').getElementsByTagName('span');
*/
var next = document.getElementById('next');
var list = document.getElementById('list');
var prev = document.getElementById('prev');

function animate(offset){
	//list.setAttribute("left","-810px");
	//alert(list.offsetLeft);
	alert("old"+list.style.left);
	list.style.left = parseInt(list.style.left) + offset + "px";
	alert("new"+list.style.left);
	//alert("new"+list.offsetLeft);
	//list.style.left = "-810px";
	//alert(list.offsetLeft);
	//list.style.left = "-810px"
	if (parseInt(list.style.left) < -2430 ) {
		parseInt(list.style.left) = 0;
		}
	if (parseInt(list.style.left) > 0 ) {
		parseInt(list.style.left) = -2430;
		}
	
	
	
	
	}

prev.onclick = function(){
	animate(-810)
	}
next.onclick = function(){
	animate(810)
	}
/*prev.onclick = function(){
	list.style.left = parseInt(list.style.left) + 600 + 'px'
	}*/
	
	//  parseInt(list.style.left)   alert("panda!")






// JavaScript Document