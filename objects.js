var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  var wholePlaylist = Object.assign({}, playlist, {artistName: songTitle})
  return wholePlaylist
}
