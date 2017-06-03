var container = document.getElementById('container');
var buttons = document.getElementById("buttons").getElementsByTagName("a");
var next = document.getElementById('next');
var list = document.getElementById('list');
var prev = document.getElementById('prev');


function animate(offset){
	//alert(list.offsetLeft);
	//alert("old"+list.style.left);
	animated = true;
	var newleft = parseInt(list.style.left) + offset;
	list.style.left = parseInt(list.style.left) + offset + "px";
	var time = 300; //位移总时间
	var interval = 10; //位移时间间隔
	var speed = offset/(time/interval); //每次位移量
	function go() {
		if ((speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft) ) {
			list.style.left = parseInt(list.style.left) + speed + 'px';
			setTimeout(go, interval);
			}
			else {
				animated = false;
				if (parseInt(list.style.left) < -2430 ) {
					list.style.left = 0 + "px";
					}
				if (parseInt(list.style.left) > 0 ) {
				//parseInt(list.style.left) = -2430;
				list.style.left = -2430 + "px";
					}
				}
		}
	//alert("new"+list.style.left);
	//alert("new"+list.offsetLeft);
	//list.style.left = "-810px";
	//alert(list.offsetLeft);
	//list.style.left = "-810px"
	go();
	}	

//prev.onclick = function (){animate(-810)};
//next.onclick = function (){animate(810)};

var index = 1;
var animated = false;

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
} */



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
		if (this.className == 'on') {
			return;
			}
		var myindex = parseInt(this.getAttribute('index'));
		var offset = -810*(myindex - index);
		animate(offset);
		index= myindex;
		showButton();
		
	}
}

function play(){
        timer=setInterval(function(){
          next.onclick();
        },2000);
      }
function stop(){
        clearInterval(timer);
      }
      container.onmouseover=stop;
      container.onmouseout=play;
      play();



/*
var timer = window.setInterval(animate(810),3000)

container.mouseover = function (){clearInterval(timer);};
container.mouseout = function (){timer = setInterval(animate(810),3000)};
*/

// JavaScript Document