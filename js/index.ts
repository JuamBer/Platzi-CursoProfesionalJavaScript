import MediaPlayer from "./MediaPlayer";
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import AdsPlugin from './plugins/Ads/index';

const video = document.querySelector('video');
const btn_play = document.getElementById('btn_play');
const btn_mute = document.getElementById('btn_mute');

if (video){
    const player = new MediaPlayer(video, [new AutoPlay(), new AutoPause(), new AdsPlugin()]);
    if (btn_play && btn_mute) {
        btn_play.onclick = () => player.togglePlay();
        btn_mute.onclick = () => player.toggleMute();
    }
}


if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./plugins/sw.js').catch(error => {
        console.log(error.message);
    })
}