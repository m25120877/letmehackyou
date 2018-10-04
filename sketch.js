var images=[];
//var i=0;
var counter = 0;
var detail;
var detail1;
function preload(){
    for (var i = 0; i< 5; i++){
        images[i]=loadImage("images/image"+ i + ".jpg");
    }
    detail=loadImage("images/IMG_0684.JPG");
    //images[0] = loadImage('images/image0.jpg');
    detail1=loadImage("images/IMG_0685.JPG");
}
function setup() {
    createCanvas(1200,800);
   // background(0);
    image(images[counter], 0, 0);
    
}

//function draw() {
//    background(255);
//    
//    
//   
//
//}
function mousePressed(){
    //i++;
    var d = dist(mouseX,mouseY,580,500);
    var d2= dist(mouseX,mouseY,580,440);
    console.log(d);
    if(counter < images.length-1){
         counter++
        image(images[counter], 0, 0);
    } else {
        counter = 4;
    }
   if(counter ==4 && d < 100){
       image(detail, 580, 500,detail.width/2,detail.height/2);
   }
    if(counter == 4 && d2 < 100){
        image(detail1,580,250,detail1.width/2,detail1.height/2);
    }
    
}
//function mousePressed(){
//    var d = dist(mouseX, mouseY, 600,500);
//    if (d < 100){
//        image(detail, 1000, 0);
//    }
//}
