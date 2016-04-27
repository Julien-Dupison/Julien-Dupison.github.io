W = window.innerWidth; H = window.innerHeight;
var canvas = document.getElementById("canvas");
var particles = [];

for(var i = 0; i < 75; i++){
	particles.push(new create_particle());
}

function create_particle(){
	this.x = Math.random()*W;
	this.y = Math.random()*H;

	this.vx = Math.random()*5-3;
	this.vy = Math.random()*5-3;

	this.size = Math.floor(Math.random() * 3) + 2  ;

	var myArray = ['#ffca28','#ffc106', '#ffb300', '#ffa000'];
	this.color = myArray[Math.floor(Math.random() * myArray.length)];
}

function draw(){
	ctx = canvas.getContext("2d");
	ctx.canvas.width  = W;
	ctx.canvas.height = H;


	ctx.fillStyle = 'rgba(55, 71, 79, 0)';
	ctx.fillRect(0, 0, W, H);
	for(var t = 0; t < particles.length; t++){
		var p = particles[t];
		var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
		gradient.addColorStop(0, p.color);
		gradient.addColorStop(1, '#37474f');
		ctx.beginPath();
		ctx.fillStyle = gradient;
		ctx.arc(p.x, p.y, p.size, Math.PI*2, false);
		ctx.fill();

		p.x += p.vx;
		p.y += p.vy;

		if(p.x < 0) p.vx = -p.vx;
		if(p.y < 0) p.vy = -p.vy;
		if(p.x > W) p.vx = -p.vx;
		if(p.y > H) p.vy = -p.vy;

	}
	requestAnimationFrame(draw);
}
draw();
