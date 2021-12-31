class MediaPlayer {
    constructor(video, plugins) {
        this.video = video;
        this.plugins = plugins || [];

        this._initPlugins();
    }

    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        this.video.play()
    }

    pause() {
        this.video.pause()
    }

    mute() {
        this.video.muted = true;
    }

    unmute() {
        this.video.muted = false;
    }

    toggleMute() {
        this.video.muted = !this.video.muted
    }

    togglePlay() {
        this.video.paused ? this.video.play() : this.video.pause();
    }
}

export default MediaPlayer;