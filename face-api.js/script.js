
const video = document.getElementById('video')

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("./models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
    faceapi.nets.faceExpressionNet.loadFromUri("./models")

]).then(startVideo)

function startVideo() {
    navigator.mediaDevices.getUserMedia(
        { video: {} })
        .then(stream => { 
            video.srcObject = stream
            video.play() 
    })
        .catch( err => { console.log('Failed to get local stream' ,err); }) }

startVideo()

video.addEventListener('play', () => {
    const canvas = faceapi.createCanvas(video)
    document.body.append(canvas)
    const displaySize = { width: 720, height: 560 }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      faceapi.draw.drawDetections(canvas, resizedDetections)
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    }, 100)
})

