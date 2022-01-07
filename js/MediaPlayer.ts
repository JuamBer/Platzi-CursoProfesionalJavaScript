class MediaPlayer {

    private media: HTMLVideoElement;
    private plugins: Array<any>;

    constructor(video: HTMLVideoElement, plugins: Array<any>) {
        this.media = video;
        this.plugins = plugins || [];

        this.initPlugins();
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    getMedia():any {
        return this.media;
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
        this.media.muted = !this.media.muted;
    }

    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }
}

export default MediaPlayer;