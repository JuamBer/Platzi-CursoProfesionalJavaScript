class MediaPlayer {

    private media: HTMLVideoElement;
    private plugins: Array<any>;
    private container: HTMLDivElement;
    
    constructor(video: HTMLVideoElement, plugins: Array<any>) {
        this.media = video;
        this.plugins = plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    private initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = "relative";
        this.media.parentNode?.insertBefore(this.container,this.media);
        this.container.appendChild(this.media);
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    getMedia():any {
        return this.media;
    }

    getContainer(): any {
        return this.container;
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