var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//creeren van 2d objecten in de Canvas
var c = canvas.getContext('2d');

c.fillStyle = "rgba(0,255,0,0.4)";
c.fillRect(200, 250, 100, 100);
c.fillStyle = "rgba(255,0,0,0.4)";
c.fillRect(100, 150, 100, 100);
c.fillStyle = "rgba(0,0,255,0.4)";
c.fillRect(400, 550, 100, 100);
c.fillStyle = "rgba(0,0,0,0.4)";
c.fillRect(800, 250, 100, 100);

console.log(canvas);


//Lijnen tekenen

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(600, 90);
c.lineTo(900, 600);
c.lineTo(50, 300);
c.strokeStyle = "red"; 
c.stroke();

//Arc en/of cirkel tekenen
c.arc(300 ,300 , 30: Int, startingAngle:
    Float, endAngle: Float,
    drawCounterClockwise: Bool (false));