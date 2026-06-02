const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN

const basic = btoa(`${client_id}:${client_secret}`)
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }).toString(),
  })

  const data = await response.json()
  return data.access_token
}

export async function getNowPlaying() {
  const access_token = await getAccessToken()
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (response.status === 204 || response.status > 400)
    return null

  const song = await response.json()
  return {
    albumImageUrl: song.item.album.images[0].url,
    artist: song.item.artists.map((a: any) => a.name).join(', '),
    isPlaying: song.is_playing,
    songUrl: song.item.external_urls.spotify,
    title: song.item.name,
  }
}
