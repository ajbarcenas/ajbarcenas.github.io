const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');
const viewing = document.getElementById('viewing');
const enableWebcamButton = document.getElementById('webcamButton');



function getUserMediaSupported() {
    return !!(navigator.mediaDevices &&
             navigator.mediaDevices.getUserMedia);
}

if (getUserMediaSupported()) {
    enableWebcamButton.addEventListener('click', enableCam);
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
    });

}


