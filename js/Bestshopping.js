var container = document.getElementById('container');
var buttons = document.getElementById("buttons").getElementsByTagName("a");
var next = document.getElementById('next');
var list = document.getElementById('list');
var prev = document.getElementById('prev');

/*第3部分的图片轮播*/
var smcontainer = document.getElementById('smcontainer');
var smnext = document.getElementById('sm-next');
var smlist = document.getElementById('smlist');
var smprev = document.getElementById('sm-prev');
var smbuttons = document.getElementById("roundbuttons").getElementsByTagName("span");


/*第3部分图片左右箭头*/
  /*第3部分图片左箭头点击 图片移动函数*/

function smprev_f(){
		if (parseInt(smlist.style.left) <= -800){
		smlist.style.left = "0";
		}
		else {
			smlist.style.left = parseInt(smlist.style.left) - 400 + "px";
			}
	}
  
  /*第3部分图片左箭头点击 图片移动+按钮颜色对应变化*/
smprev.onclick = function (){
	if(smindex == 3){
		smindex = 1;
		}
	else {
		smindex += 1;
		}
	smshowButton();
	smprev_f();
	}

/*第3部分 定义自动向右滚动图片的函数，等同于右箭头*/
var smnext_f = function (){
	if (parseInt(smlist.style.left) >= 0){
		smlist.style.left = "-800px";
		}
		else {
			smlist.style.left = parseInt(smlist.style.left) + 400 + "px";		
			}
	}
	
/*第3部分 右箭头点击引发的函数，自动滚动与停止*/
var smindex =1;
function smshowButton() {
	
	for (var i = 0; i < smbuttons.length; i++) {
		 smbuttons[i].className = "off";
	}
	smbuttons[smindex-1].className = "current";
	//alert(smbuttons[index-1].className);
	
	}

  var movingnext = function (){
	 if(smindex == 1){
		smindex = 3;
		}
	/*else {
		index -= 1;
		}*/
		else if (smindex == 2){
		smindex = 1;
		}
		else
		{smindex = 2;}
		//alert(smindex);
	smshowButton();
	smnext_f();
	};
	
smnext.onclick = movingnext; 
automoving = setInterval(movingnext,3000);  
//smcontainer.onclick = function(){clearInterval(automoving);} //有效果
smcontainer.onmouseenter = function(){clearInterval(automoving);} //有效果
//smcontainer.onmouseenter = function(){alert('哈哈，还是没解决！');}
smcontainer.onmouseleave = function (){automoving = setInterval(smnext_f,3000);} //必须加上automoving=,相当于重新赋值，否则会出现多个定时器，出现混乱

/*function moving(){timer = setInterval(snext,3000);}
smcontainer.onmouseout = moving;

smcontainer.onclick = function (){clearInterval(timer);}
moving();*/

//需要补全按钮对应和变色



	
/*
prev.onclick = function(){
	if(index == 4){
		index = 1;
		}
	else {
		index += 1;
		}
	showButton();
	animate(-810)
	}*/
	





//顶部的滚动图片

function animate(offset){
	//alert(list.offsetLeft);
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
	//alert(list.offsetLeft);
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