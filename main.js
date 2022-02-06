Webcam.set({
    width:350,
    height:300,
    img_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(Data_URI){
       document.getElementById("result").innerHTML="<img id='captured_img' src='"+Data_URI+"'>";
    })
}

console.log("ml5version:"+ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7rP-Nput2/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}