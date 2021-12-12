noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    hat_nose = loadImage('https://i.postimg.cc/J0M5kmNx/R-2.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX-12, noseY, 25, 25);
    image(hat_nose, noseX-65, noseY-120, 120, 80);
}

function take_snapshot() {
    save('myFilterImage.png')
}

