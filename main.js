song="";
music="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload()
{
    song=loadSound("52 Gaj Ka Daman - Renuka Panwar 128 Kbps.mp3");
    music=loadSound("Naach Meri Rani - Guru Randhawa.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.console('pose',gotposes);
}

function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);

        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("leftwristx="+leftwristx+"leftwristy="+leftwristy);

        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log(" rightwristx="+ rightwristx+"rightwristy="+rightwristy);
    }
}

function modelLoaded()
{
  console.log('model is Loaded');
}

function draw()
{
    image(video,0,0,600,500);
}