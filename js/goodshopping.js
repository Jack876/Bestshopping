/*var container = document.getElementById('container');

var buttons = document.getElementById('buttons').getElementsByTagName('span');

var next = document.getElementById('next');*/
var list = document.getElementById('list');
var prev = document.getElementById('prev');

function animate(offset){
	//list.setAttribute("left","-810px");
	//alert(list.offsetLeft);
	alert("old"+list.style.left);

	var newleft = parseInt(list.style.left) + offset;
	list.style.marginleft = newleft +"px";
	alert("new"+list.style.left);
	// list.offsetLeft=-810;
	//alert("new"+list.offsetLeft);
	//list.style.left = "-810px";
	//alert(list.offsetLeft);
	//list.style.left = "-810px"
	}

prev.onclick = function(){
	animate(-810)
	}
/*prev.onclick = function(){
	list.style.left = parseInt(list.style.left) + 600 + 'px'
	}*/
	
	//  parseInt(list.style.left)   alert("panda!")






// JavaScript Document