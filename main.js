function preload(){
}

function setup(){
    canvas=createCanvas(640,480)
    canvas.position(510,250)
    camera=createCapture(VIDEO)
    camera.hide()
    tintcolor=""
}
function draw() { image (camera, 100, 100, 420, 300);

    fill(255, 0, 0);
    
    stroke(0, 255, 0);
    
    circle(50, 50, 80);
    
    circle(50, 430, 80);
    
    circle(590, 50, 80);
    
    circle(590, 430, 80);
    
    fill(0, 128, 0); stroke(0, 128, 0); rect(90, 40, 460, 20);
    
    rect(90, 420, 460, 20);
    
    rect(40, 90, 20, 300);
    
    rect(580, 90, 20, 300);}


function apply_filter(){
    tintcolor=document.getElementById("colorname").value
}

function take_snapshot(){
    save('photop5.png')
}