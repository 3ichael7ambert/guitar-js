document.addEventListener("keydown", function(event) {
    const string = event.key.toUpperCase().replace(/\d+/g, '');
    const fret = parseInt(event.key.match(/\d+/g)) || 0;
    const audio = document.getElementById(string + "-" + fret + "-sound");
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
  
  const strings = document.querySelectorAll(".string");
  strings.forEach(string => {
    string.addEventListener("click", function() {
      const [note, fret] = this.id.split("-");
      const audio = document.getElementById(note + "-" + fret + "-sound");
      audio.currentTime = 0;
      audio.play();
    });
  });
  