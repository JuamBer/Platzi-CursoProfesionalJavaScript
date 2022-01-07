import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor(){

    }

    run(player: MediaPlayer){
        player.mute();
        player.play();
    }
}

export default AutoPlay;