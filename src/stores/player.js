import { reactive } from 'vue'

export const player = reactive({
    playlist   : [],
    now_playing: {}, // SONG OBJECT
    index:0,
    setPlaylist(songs) {
        this.playlist.push(songs);
    },
    setNowPlaying(song) {
        this.now_playing.push(song);
    },
    getNowPlayingSongId() {
        return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing;
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong(){
        this.index++;
        if (this.index > this.playlist.length - 1) { //šo risinājumu skatījos no jau iepriekš paša veidota music playera
            this.index = 0;                          //kuru veidoju iepriekšēja kursa darbā
      }
      this.now_playing = this.playlist[this.index];
    },
    getPreviousSong() {
        this.index--;
        if (this.index < 0) {
            this.index = this.playlist.length - 1;
      }
        this.now_playing = this.playlist[this.index];
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})