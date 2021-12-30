import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector('video');
const button = document.querySelector('button');
const player = new MediaPlayer(video);

button.onclick = () => player.togglePlay();