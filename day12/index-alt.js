const fs = require('fs');

const lines = fs.readFileSync('day12/instructions.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

const directionToCoord = {
    0: 'E',
    1: 'N',
    2: 'W',
    3: 'S',
}

class BetterBoat {
  constructor() {
      this.x = 0;
      this.y = 0;
      this.dx = 10;
      this.dy = 1;
  }

  move(char, number) {
      switch(char) {
          case 'N':
              this.dy += number;
              break;
          case 'S':
              this.dy -= number;
              break;
          case 'E':
              this.dx += number;
              break;
          case 'W':
              this.dx -= number;
              break;
          case 'L':
              {
                  let angle = number * Math.PI / 180;
                  let dx = this.dx*Math.cos(angle) - this.dy*Math.sin(angle);
                  let dy = this.dx*Math.sin(angle) + this.dy*Math.cos(angle);
                  this.dx = Math.round(dx);
                  this.dy = Math.round(dy);
              }
              break;
          case 'R':
              {
                  let angle = -number * Math.PI / 180;
                  let dx = this.dx*Math.cos(angle) - this.dy*Math.sin(angle);
                  let dy = this.dx*Math.sin(angle) + this.dy*Math.cos(angle);
                  this.dx = Math.round(dx);
                  this.dy = Math.round(dy);
              }
              break;
          case 'F':
              this.x += number*this.dx;
              this.y += number*this.dy;
              break;
          default:
              throw new Error('Not implemented: ' + char);
              break;
      }
  }

  getPosition() {
      return Math.abs(this.x) + Math.abs(this.y);
  }
}

const betterBoat = new BetterBoat();

// console.log(betterBoat.x, betterBoat.y);
lines.forEach(line => {
  const {groups} = /^(?<char>.)(?<number>\d+)$/.exec(line);
  betterBoat.move(groups.char, parseInt(groups.number));
  // console.log(betterBoat.x, betterBoat.y);
})


console.log(betterBoat.getPosition());
