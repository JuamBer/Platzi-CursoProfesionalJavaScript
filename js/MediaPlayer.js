class MediaPlayer {
    constructor(video, plugins) {
        this.media = video;
        this.plugins = plugins || [];

        this._initPlugins();
    }

    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    get muted() {
        return this.media.muted;
    }
    set muted(muted) {
        this.media.muted = muted;
    }

    play() {
        console.log("Video play");
        this.media.play()
    }

    pause() {
        console.log("Video pause");
        this.media.pause()
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    toggleMute() {
        this.media.muted = this.media.muted
    }

    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }
}

export default MediaPlayer;