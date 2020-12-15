const analyze = instructions => {
  const turns = instructions.filter(i => 'LR'.split('').indexOf(i.action) > -1)
  const moves = instructions.filter(i => 'NEWSF'.split('').indexOf(i.action) > -1)
  return { expectedTurns: turns.length, expectedMoves: moves.length }
}

module.exports = analyze
