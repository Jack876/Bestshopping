/*var container = document.getElementById('container');*/

var buttons = document.getElementById("buttons").getElementsByTagName("a");
var next = document.getElementById('next');
var list = document.getElementById('list');
var prev = document.getElementById('prev');

function animate(offset){
	//alert(list.offsetLeft);
	//alert("old"+list.style.left);
	list.style.left = parseInt(list.style.left) + offset + "px";
	//alert("new"+list.style.left);
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

//prev.onclick = function (){animate(-810)};
//next.onclick = function (){animate(810)};

 var index = 1;

function showButton() {
	for (var i = 0; i < buttons.length; i++) {
		
			buttons[i].className = "";
			
			
	}
	buttons[index-1].className = "active";
	//alert(buttons[index-1].className);
}


/*function showButton() {
                for (var i = 0; i < buttons.length; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
}
*/



prev.onclick = function(){
	if(index == 4){
		index = 1;
		}
	else {
		index += 1;
		}
	//alert(index);
	showButton();
	animate(-810)
	}
next.onclick = function(){
	if(index == 1 ){
		index = 4;
		}
	else {
		index -= 1;
		}
	//alert(index);
	showButton();
	animate(810)
	}
	
for (var i = 0; i < buttons.length; i++){
	buttons[i].onclick = function(){
		var myindex = parseInt(this.getAttribute('index'));
		var ossset =  (myindex - index);
		index= myindex;
		animate(offset)
		}
	}
// JavaScript Document