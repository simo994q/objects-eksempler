const playerOne = {
    character: 'mario',
    score: 0,
    highScore: 100,
    incScore: function() {
        this.score += 1
        return this
      }
}

console.log(playerOne);
playerOne.incScore().incScore();
console.log(playerOne);