function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(275, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
}

function take_snapshot() {
    save("my_birthday_party_picture.png");
}