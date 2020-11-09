const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');
const viewing = document.getElementById('viewing');
const enableWebcamButton = document.getElementById('webcamButton');

const capture = document.getElementById("capture");
const capButton = document.getElementById('capButton');
const snapshot = document.getElementById('snapshot');

var camerastream = null;

function getUserMediaSupported() {
    return !!(navigator.mediaDevices &&
             navigator.mediaDevices.getUserMedia);
}

if (getUserMediaSupported()) {
    enableWebcamButton.addEventListener('click', enableCam);
    capButton.addEventListener('click', captureSnapshot);
} else {
    console.warn('getUserMedia() is not supported by your browser');
}

function enableCam(event) {

    event.target.classList.add('removed');

    const constraints = {
        video: true
    };

    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        video.srcObject = stream;
        camerastream = stream;
    });

}

function captureSnapshot() {
    var ctx = capture.getContext('2d');
    var img = new Image();

    ctx.drawImage(video,0,0,capture.width, capture.height);
    img.src = capture.toDataURL("image/png");
    img.width = 240;
    snapshot.innerHTML = '';
    snapshot.appendChild(img);
}

