/*
*  Copyright (c) 2020 CodexWorld. All Rights Reserved.
*
*  @url https://www.codexworld.com/
*/

'use strict';

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById("snap");
const errorMsgElement = document.querySelector('span#errorMsg');


const video1 = document.getElementById('video-1');
const canvas1 = document.getElementById('canvas-1');
const snap1 = document.getElementById("snap-1");
const errorMsgElement1 = document.querySelector('span#errorMsg');

const constraints = {
  audio: false,
  video: {
    width: 150, height: 180
  }
};

const constraints1 = {
  audio: false,
  video: {
    width: 180, height: 200
  }
};

// Access webcam
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
    const stream1 = await navigator.mediaDevices.getUserMedia(constraints1);
    handleSuccess1(stream1);
  } catch (e) {
    console.error('navigator.getUserMedia error:', e);
    errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  }
}

// Success
function handleSuccess(stream) {
  console.log('getUserMedia() got stream:', stream);
  window.stream = stream;
  video.srcObject = stream;
}
// Success
function handleSuccess1(stream) {
  console.log('getUserMedia() got stream:', stream);
  window.stream = stream;
  video1.srcObject = stream;
}

// Load init
init();

// Draw image
var context = canvas.getContext('2d');
var context1 = canvas1.getContext('2d');
snap.addEventListener("click", function() {
	context.drawImage(video, 0, 0, 150, 180);
  $("#video").hide();
  $("#snap").hide();
});
snap1.addEventListener("click", function() {
	context1.drawImage(video, 0, 0, 180, 200);
  $("#video-1").hide();
  $("#snap-1").hide();
});