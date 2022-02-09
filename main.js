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
classifier=ml5.imageClassifier('https://storage.googleapis.com/tm-model/7rP-Nput2/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
  }
  
  
    function check()
    {
      img = document.getElementById('captured_image');
      classifier.classify(img, gotResult);
    }
  
  
  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      prediction = results[0].label;
      speak();
      if(results[0].label == "amazing")
      {
          document.getElementById("update_emoji").innerHTML = "&#128076;";
          <h4> Amazing job! </h4>
      }
      if(results[0].label == "great")
      {
          document.getElementById("update_emoji").innerHTML = "&#128077;";
          <h4> This is great!</h4>
      }
      if(results[0].label == "peace")
      {
          document.getElementById("update_emoji").innerHTML = "&#9996;";
          <h4> Peace out, you are epic!</h4>
      }
    }
  }
  