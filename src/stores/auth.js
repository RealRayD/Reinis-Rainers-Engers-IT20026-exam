import { reactive } from 'vue'
import router from '../router';

export const auth = reactive({
    // TE DEFINĒT USER OBJEKTU
user: {
    name: "Reinis Rainers",
    surname: "Engers",
    code: "IT20026",
    favorite_songs: []
},
is_authenticated: localStorage.is_authenticated ?? false,

setUserData(name, surname, code) {
    name = this.user?.name;
    surname = this.user?.surname;
    code = this.user?.code;
},

authenticate(email, password) {
    if(email == "reinisrainers.engers@va.lv" && password == "123456") {
        localStorage.is_authenticated = true;
        this.is_authenticated=true;
        this.$router.push({path: '/'});
    } 
},

logout() {
    localStorage.clear();
    localStorage.is_authenticated=false;
    this.$router.push('/login')
},

toggleFavorite(songID) {
    if (this.user.favorite_songs.includes(songID)) {
        const index = this.user.favorite_songs.indexOf(songID);
        this.user.favorite_songs.splice(index,1);
    } else {
        const index = this.favorite_songs.indexOf(songID);
        this.user.favorite_songs.push(songID);
    }
},

getFavoriteSongs() {
    return this.user.favorite_songs;
}
})