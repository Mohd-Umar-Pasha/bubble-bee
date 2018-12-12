function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

var randomColor = random_rgba();
console.log(randomColor);

var body = document.querySelector('body');
body.style.background = randomColor;

document.addEventListener('click', function(e) {
	var randomColor = random_rgba();
	var xPos = e.clientX;
	var yPos = e.clientY;
	var el = document.createElement('div');
	el.classList.add('ripple');
	el.style.background = randomColor;
	var parentWidth = body.getBoundingClientRect().width;
	var parentHeight = body.getBoundingClientRect().height;
	var width = Math.max(parentHeight, parentWidth);
	var smPosX = xPos - 300/2;
	var smPosY = yPos - 300/2;
	xPos = xPos - width/2;
	yPos = yPos - width/2;
	el.style.top = yPos+'px';
	el.style.left = xPos+'px';
	el.style.width = width+'px';
	el.style.height = width+'px';
	body.appendChild(el);
	var smallEl = document.createElement('div');
	smallEl.classList.add('small-circle');
	smallEl.style.top = smPosY+'px';
	smallEl.style.left = smPosX+'px';
	body.appendChild(smallEl);
	setTimeout(function() {
		el.classList.add('ripple-effect');
		smallEl.classList.add('small-ripple');
	}, 0);
});

// document.querySelector('button').addEventListener('mouseover', function(e) {
// 	this.classList.add('highlight');
// })