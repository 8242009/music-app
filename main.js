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

  Hsong=song.isPlaying();
  console.log(song);

  Hsong_1=song_1.isPlaying();
  console.log(song_1);


  
  if(scoreleftWrist > 0.2){
    circle(leftWrist_x,leftWrist_y,20);
    song_1.stop();
    if(Hsong == false){
      song.play();
  }
  else{
      console.log("Song Name: Song");
      document.getElementById("music").innerHTML = "Song Name: song";
  }
}


if(scoreRightWrist > 0.2){
  circle(rightWristX,rightWristY,20);
  song.stop();
  if(Hsong_1 == false){
    song_1.play();
}
else{
    console.log("Song Name: Song1");
    document.getElementById("music").innerHTML = "Song Name: songq";
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

        scoreRightWrist = results[0].pose.keypoints[9].score;
        console.log(scoreRightWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);

    }
}