// spotify API creds
const client_id = "fom spotify web credentials"
const client_secret = 'secret from we api'

// getToken function

const getToken = async () => {
    const response = await fetch('url', {
        method: 'POST',
        body: 'grant_type=client_credentials',
        headers: {
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
            'Content-Type': 'application/w.......'
        }
    })
    const data = await response.json()
    token = data.access_token
    return token
}

// verify that we get our token
// getToken()

getToken()


// use getToken function, to get a song
// getSong Function

const getSong = async (track) => {
    const token = await getToken()
    const response = await fetch(`api.spotify...${track}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const data = await response.json()
    const song_data = {
        preview_url: data.tracks.items[0].preview_url,
        cover: data.tracks.items[0].album.images[0].url,
        artist: data.tracks.items[0].artists[0].name
    }
    return song_data
};


// verify that we get the song data
getSong('ride the store')


// clickedSong function

const form = document.querySelector('form')
const card = document.querySelector('#card')

form.addEventListener('submit', async (event) =>{
    event.preventDefault()
    const track = form[0].value.toLowerCase()
    const song_data = await getSong(track)
    playSong(song_data.preview_url)
    card.innerHTMML = `
        <img src=${song_data.cover}>
        <button id="pause" onClick='pauseSong()'>Pause</button>
    `
})

// handles playing the audio
let audio
const playSong = (preview_url) => {
    if (audio) {
        audio.pause()
    }
    audio = new Audio(preview_url)
    audio.play()
}

// handles pausing the audio
let pause = false
const pauseSong = () => {
    const button = document.querySelector('#pause')
    if (!pause) {
        audio.pause()
        pause = true
        button.innerHTML = 'Play'
    } else {
        audio.play()
        pause = false
        button.innerHTML = 'Pause'
    }
}