const songlist = [
    {
        "songname": "Pacarku Superstar",
        "artist" : "Project Pop",
        "genre" : "Pop",
        "duration" : "4:30"
    },
    {
        "songname": "Instrumental Beats Mix 2019",
        "artist" : "Nicop Records",
        "genre" : "Hip-Hop",
        "duration" : "20:00"
    },
    {
        "songname": "Dangdut Is The Music Of My Country",
        "artist" : "Project Pop",
        "genre" : "Pop",
        "duration" : "3:20"
    },
    {
        "songname": "Sang Dewi",
        "artist" : "Lyodra, Andi Rianto",
        "genre" : "Pop",
        "duration" : "4:00"
    },
    {
        "songname": "Chicken Noodle Soup",
        "artist" : "J-Hope",
        "genre" : "Hip-Hop",
        "duration" : "4:00"
    },
    {
        "songname": "Tutur Batin",
        "artist" : "Yura Yunita",
        "genre" : "Pop",
        "duration" : "05:00"
    },
    {
        "songname": "Dunia Tipu-Tipu",
        "artist" : "Yura Yunita",
        "genre" : "Pop",
        "duration" : "3:00"
    },
    {
        "songname": "Tenang",
        "artist" : "Yura Yunita",
        "genre" : "Pop",
        "duration" : "2:30"
    },
    {
        "songname": "Pergilah Kasih",
        "artist" : "Chrisye",
        "genre" : "Jazz",
        "duration" : "5:00"
    },
    {
        "songname": "Cintaku",
        "artist" : "Chrisye",
        "genre" : "Jazz",
        "duration" : "5:00"
    },
    {
        "songname": "Left and Right",
        "artist" : "Charlie Puth",
        "genre" : "Soul",
        "duration" : "30:00"
    },
    {
        "songname": "Light Switch",
        "artist" : "Charlie Puth",
        "genre" : "Soul",
        "duration" : "11:00"
    },
    {
        "songname": "We Dont Talk Anymore",
        "artist" : "Charlie Puth",
        "genre" : "Soul",
        "duration" : "20:30"
    },
    {
        "songname": "7 Rings",
        "artist" : "Ariana Grande",
        "genre" : "Hip-Hop",
        "duration" : "1:20"
    },
];
//filter artist
function songArtist(artistname){
    artistFilter = songlist.filter((data) => data.artist.toLowerCase() == artistname.toLowerCase());
    console.log("============",artistname,"=============");
    console.log(artistFilter);   
    console.log("=======================================");  
}

//filter genre
function songGenre(genrename){
    let newSong = [];
    for(const obj of songlist){
	    if(obj.genre.toLowerCase() == genrename.toLowerCase()){
            //console.log(obj.songname);
            let songInput = {};
            songInput['Title'] = obj.songname;
            songInput['Artist'] = obj.artist;
            songInput['Genre'] = obj.genre;
            newSong.push(songInput);
        }
    }
    console.log(newSong);
}

function songGroupArtist(){
    groupArtist = songlist.reduce((group, artistname) => {
        const {artist} = artistname;
        group[artist] = group[artist] ?? [];
        group[artist].push(artistname);
        return group;
    }, []);

    console.log(groupArtist);
}

//filter duration
function songDuration(){
    let index_song = 0;
    let durationtime = 0
    for (let i = 0; i <= songlist.length-1; i++) {
        let time = songlist[i].duration.split(":");
        let minute = parseInt(time[0]) * 60;
        let second = parseInt(time[1]) * 1;

        durationtime = durationtime + (minute + second);

        if (durationtime < 3600) {
            index_song+=1;
        }
    }
    console.log(index_song);
    
    for(let i = 0; i < index_song; i++){
        console.log(songlist[i]);
    }
    
}

//songArtist('Yura yunita');
//songGenre('pop');
//songDuration();
songGroupArtist();