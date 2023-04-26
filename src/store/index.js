import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            playingStatus: false,
            audio: null,
            index: null,
            currentArtist: null,
            currentTrack: null,
            indexCopy: null,
            album: null,
            albumCover: null,
            audioVolume: 0,
            audioDuration: '00:00',
            songTime: null,
            actualSongTimeValue: 0

        };
    },
    mutations: {
        modifySongTime(state, newTime) {
         
            state.audio.currentTime = newTime
           
        },

        setSongDuration(state) {
            state.audioDuration = state.audio.duration
        },
        muteAudio(state) {
         
            state.audio.volume = 0;
            state.audioVolume = 0;
           
        },
        unmuteAudio(state) {
            state.audio.volume = 1;
            state.audioVolume = 1;
        },
        changeAudioVolume(state, newValue) {
            state.audioVolume = newValue
            state.audio.volume = newValue
            
        },
        setAlbumInfo(state, album) {
            state.album = album
            state.albumCover = album.albumCover
            state.currentArtist = album.name
            state.currentTrack = album.tracks[0].name;

        },

        playMusic(state, payload) {
            const { audio, indexPassed, artistPassed, trackPassed } = payload;
            state.index = indexPassed;
            state.currentArtist = artistPassed;
            state.currentTrack = trackPassed;
            if (state.playingStatus) {
                state.audio.pause();
            }
            state.playingStatus = true;
            state.audio = audio;
            state.audio.addEventListener("ended", () => {
                this.commit('nextSong'); // call the nextSong mutation
            });
          
            state.audio.volume = 1;
            state.audioVolume = 1;
           
              state.audio.addEventListener("timeupdate", () => {
              
                state.actualSongTimeValue = state.audio.currentTime;
              });
            state.actualSongTimeValue = state.audio.currentTime;
            state.audio.play();
          state.actualSongTimeValue = state.audio.currentTime;
                  this.commit('setSongDuration');

        },
        pauseMusic(state, payload) {
            state.audio.pause();
            state.playingStatus = false;
            state.indexCopy = payload;
            state.index = null;
        },
        pauseMusicGeneral(state) {
            state.audio.pause();
            state.playingStatus = false;
            state.indexCopy = state.index;
            state.index = null;
        },

        playFirstSong(state, info) {
            state.playingStatus = true;
            if (state.audio === null) {
                state.audio = new Audio(info.tracks[0].path);
                state.index = 1;
                state.currentArtist = info.name;
                state.currentTrack = info.tracks[0].name;

            } else {
                state.index = state.indexCopy;
            }
            state.audio.addEventListener("ended", () => {
                this.commit('nextSong'); // call the nextSong mutation
            });
            state.audio.addEventListener("timeupdate", () => {
                state.actualSongTimeValue = state.audio.currentTime;
            });
            state.audio.volume = 1;
            state.audioVolume = 1;
            state.audio.addEventListener("loadedmetadata", () => {
                this.commit('setSongDuration');
              
                state.actualSongTimeValue = state.audio.currentTime;
                state.audio.play();
            });
            state.actualSongTimeValue = state.audio.currentTime;
            state.audio.play();
        }
        ,

        nextSong(state) {
            const length = state.album.tracks.length;
            state.playingStatus = true;
            if (state.audio !== null) {
                state.audio.pause();
            }
            if (state.index === null) {
                state.index = state.indexCopy || 0;
            }
            if (state.index === length) {
                state.audio = new Audio(state.album.tracks[0].path);
                state.currentTrack = state.album.tracks[0].name;
                state.index = 1;
            } else {
                state.audio = new Audio(state.album.tracks[state.index].path);
                state.currentTrack = state.album.tracks[state.index].name;
                state.index++;
            }

            state.audio.addEventListener("ended", () => {
                this.commit('nextSong'); // call the nextSong mutation
            });
            state.audio.addEventListener("timeupdate", () => {
                state.actualSongTimeValue = 0;
                state.actualSongTimeValue = state.audio.currentTime;
            });
            state.audio.volume = 1;
            state.audioVolume = 1;


            state.audio.addEventListener("loadedmetadata", () => {
                this.commit('setSongDuration');
               
                state.actualSongTimeValue = state.audio.currentTime;
                state.audio.play();
            });
            state.audio.play();
        },
        previousSong(state, album) {
            if (state.audio !== null) {
                state.audio.pause();
            }
            if (state.index === null) {
                state.index = state.indexCopy || 1;
            }
            if (state.index === 1) {
                if (state.audio !== null) {
                    state.audio.currentTime = 0;
                } else {
                    state.audio = new Audio(album.tracks[state.index - 1].path);
                    state.currentTrack = state.album.tracks[state.index - 1].name;
                }
            } else {
                state.audio = new Audio(album.tracks[state.index - 2].path);
                state.currentTrack = state.album.tracks[state.index - 2].name;
                state.index--;
            }
            state.playingStatus = true;
            state.audio.addEventListener("ended", () => {
                this.commit('nextSong'); // call the nextSong mutation
            });
            state.audio.addEventListener("timeupdate", () => {
                state.actualSongTimeValue = state.audio.currentTime;
            });
            state.audio.volume = 1;
            state.audioVolume = 1;

            this.commit('setSongDuration');
            state.audio.addEventListener("loadedmetadata", () => {
                this.commit('setSongDuration');
                
                state.audio.play();
                state.actualSongTimeValue = state.audio.currentTime;
            });
            state.actualSongTimeValue = state.audio.currentTime;
            state.audio.play();
        },
    },
    getters: {
        playingStatus: (state) => state.playingStatus,
        getIndex: (state) => state.index,
        getCover: (state) => state.albumCover,
        getArtist: (state) => state.currentArtist,
        getTrack: (state) => state.currentTrack,
        getAlbum: (state) => state.album,
        getVolume: (state) => state.audioVolume,
        getAudioLength(state) {
            if (state.audioDuration !== '00:00') {
                const mins = Math.floor(state.audioDuration / 60);
                let sec = Math.floor(state.audioDuration % 60);
                sec = sec.toString().padStart(2, "0")
                return [mins, sec, state.audioDuration]
            } else {
                return ['00', '00', '00'];

            }

        },
        songTime(state) {
            return state.audioDuration;
        },
        actualSongTime(state) {
            if (state.actualSongTimeValue) {
                return state.actualSongTimeValue
            }
            return 0;
        }


    }

});


export default store