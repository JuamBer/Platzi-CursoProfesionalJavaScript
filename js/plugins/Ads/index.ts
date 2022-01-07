import Ads, { Ad } from "./Ads";
import MediaPlayer from "../../MediaPlayer";

class AdsPlugin {
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private ads: Ads;
    private currentAd: Ad | undefined;
    private adsContainer: HTMLElement;

    constructor() {
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement("div");
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    run(player: MediaPlayer) {
        this.player = player;
        this.player.getContainer().appendChild(this.adsContainer);
        this.media = this.player.getMedia();
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    }

    private renderAd() {
        if (this.currentAd) {
            return;
        }
        const ad = this.ads.getAd();
        this.currentAd = ad;

        if (this.currentAd) {
            this.adsContainer.innerHTML = `
            <div class="ads">
                <a class="ads__link" href="${this.currentAd.url}" target="_blank">
                    <img class="ads__img" src="${this.currentAd.imageUrl}" />
                    <div class="ads__info">
                    <h5 class="ads__title">${this.currentAd.title}</h5>
                    <p class="ads__body">${this.currentAd.body}</p>
                    </div>
                </a>
            </div>`;

        setTimeout(()=>{
            this.currentAd = undefined;
            this.adsContainer.innerHTML = ``;
        },10000);
        }

    }
}

export default AdsPlugin;