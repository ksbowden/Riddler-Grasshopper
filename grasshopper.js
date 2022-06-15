const BEAM_MIN = 0;
const BEAM_MAX = 99;
const MAX_HOP_DISTANCE = 20;
const NUM_HOPS = 100000000;

class Grasshopper {
  constructor() {
    this._positionMap = {};
    this._position = this._randomInRange(BEAM_MIN, BEAM_MAX);
  }

  set position(position) {
    this._positionMap[position] = this._positionMap[position]
      ? this._positionMap[position] + 1
      : 1;
    this._position = position;
  }

  get positionMap() {
    return this._positionMap;
  }

  hop() {
    let newPosition = this._position;

    const min =
      this._position - MAX_HOP_DISTANCE < BEAM_MIN
        ? BEAM_MIN
        : this._position - MAX_HOP_DISTANCE;
    const max =
      this._position + MAX_HOP_DISTANCE > BEAM_MAX
        ? BEAM_MAX
        : this._position + MAX_HOP_DISTANCE;

    while (newPosition === this._position) {
      newPosition = this._randomInRange(min, max);
    }

    this.position = newPosition;
  }

  _randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function average(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

function printResults() {
  const avgOfEnds = average([positionMap[BEAM_MIN], positionMap[BEAM_MAX]]);
  const leastLikelyProbability = avgOfEnds / NUM_HOPS;
  console.log(
    `Least likely: either end of the beam: ${(
      leastLikelyProbability * 100
    ).toPrecision(4)}%`
  );

  const avgOfMiddle = average(
    Object.values(positionMap).slice(
      BEAM_MIN + MAX_HOP_DISTANCE,
      BEAM_MAX - MAX_HOP_DISTANCE
    )
  );
  const mostLikelyProbability = avgOfMiddle / NUM_HOPS;
  console.log(
    `Most likely: any position in the middle of the beam (ends minus max hop distance), equally: ${(
      mostLikelyProbability * 100
    ).toPrecision(4)}%`
  );

  console.log(
    `Ratio of most likely probability to least likely probability is: ${(
      mostLikelyProbability / leastLikelyProbability
    ).toPrecision(4)}`
  );

  const probabilityOfLandingInMiddleSection =
    Object.values(positionMap)
      .slice(BEAM_MIN + MAX_HOP_DISTANCE, BEAM_MAX - MAX_HOP_DISTANCE)
      .reduce((a, b) => a + b, 0) / NUM_HOPS;
  console.log(
    `Probability of landing in the middle section: ${(
      probabilityOfLandingInMiddleSection * 100
    ).toPrecision(4)}%`
  );
}

function main() {
  const grasshopper = new Grasshopper();
  for (let i = 0; i < NUM_HOPS; i++) {
    grasshopper.hop();
  }
  window.positionMap = grasshopper.positionMap;
  printResults();
}

main();
