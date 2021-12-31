import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const btn_play = document.getElementById('btn_play');
const btn_mute = document.getElementById('btn_mute');

const player = new MediaPlayer(video, [new AutoPlay()]);

btn_play.onclick = () => player.togglePlay();
btn_mute.onclick = () => player.toggleMute();