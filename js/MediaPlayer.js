class MediaPlayer {
    constructor(video) {
        this.video = video
    }

    play() {
        this.video.play()
    }

    pause() {
        this.video.pause()
    }

    togglePlay() {
        this.video.paused ? this.video.play() : this.video.pause();
    }
}

export default MediaPlayer;