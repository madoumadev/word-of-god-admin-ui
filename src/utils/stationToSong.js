export default function stationToSong(station) {
  return {
    id: station.station.id,
    number: station.station.id,
    audio: false,
    chord: false,
    code: station.now_playing.playlist,
    chordUrl: null,
    name: station.station.name,
    description: null,
    audioUrl: station.station.listen_url,
    author: null,
    currentMedia: {
      id: station.now_playing.song.id,
      name: station.now_playing.song.title,
      image: station.now_playing.song.art,
      duration: station.now_playing.duration,
      playedAt: station.now_playing.played_at,
      listeners: {
        total: station.listeners.total,
        current: station.listeners.unique
      }
    },
    nextMedia: {
      id: station.playing_next.song.id,
      name: station.playing_next.song.title,
      image: station.playing_next.song.art,
      duration: station.playing_next.duration,
      playedAt: station.playing_next.played_at
    },
    previewMedias: station.song_history.map((media) => {
      return {
        id: media.song.id,
        name: media.song.title,
        image: media.song.art,
        duration: media.duration,
        playedAt: media.played_at
      }
    })
  }
}
