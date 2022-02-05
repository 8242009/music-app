function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw(){
	image(video,0,0,600,500);

  fill("#00ff00");
  stroke("#ff0000");

  song_name = song.isPlaying();
  console.log(song_name);
  
  if(scoreleftWrist > 0.2){
    circle(leftWrist_x,leftWrist_y,20);
    song_1.stop();
    if(song_name == false){
      song.play();
  }
  else{
      console.log("Song Name: Song1");
      document.getElementById("music").innerHTML = "Song Name: song1";
  }
}
}
function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

leftWristX=0;
leftWristX=0;
rightWristX=0;
rightWristY=0
song="";
song_1="";
scoreLeftWrist=0;
scoreRightWrist=0;
song_name = "";

function preload(){
	song=loadSound("music.mp3");
	song_1=loadSound("music2.mp3");
}


function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);        
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);

    }
}