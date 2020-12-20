const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream pass to video element, and play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch errors here
        console.log('whoops', error);
    }
}

button.addEventListener('click', async () => {
// Disable button when clicked
    button.disabled = true;
    // Start Picture in Picture 
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

selectMediaStream();