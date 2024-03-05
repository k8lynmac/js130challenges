class BeerSong {

  static verse(verseNum) {
    return this.getLyrics(verseNum);
  }

  static verses(start, end) {

    let verseArr = [];

    for (let idx = start; idx >= end; idx--) {
      verseArr.push(idx);
    }
  
    let verses = [];

    verseArr.forEach(line => {
      verses.push(this.getLyrics(line));
    })

    return verses.join('\n');

  }

  static lyrics() {
    return this.verses(99, 0);
  }

  static getLyrics(line) {
    let lyric = '';

    if (line === 0) {
      lyric = `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
    } else if (line === 1) {
      lyric = `${line} bottle of beer on the wall, ${line} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
    } else if (line === 2) {
      lyric = `${line} bottles of beer on the wall, ${line} bottles of beer.\nTake one down and pass it around, ${line - 1} bottle of beer on the wall.\n`;
    } else {
      lyric = `${line} bottles of beer on the wall, ${line} bottles of beer.\nTake one down and pass it around, ${line - 1} bottles of beer on the wall.\n`;
    }
    
    return lyric;
  }
}

module.exports = BeerSong;