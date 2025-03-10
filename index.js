function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(block) {
  if (block > 42) {
    return (block - 42) * 264;
  } else {
    return (42 - block) * 264;
  }
}

console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
  return (start - destination) * 264;
}

console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return "free sample=0";
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000) {
    return "free sample=25";
  } else  {
    return "cannot travel that far";
  }
}

console.log(calculatesFarePrice(34, 32));
