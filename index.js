function distanceFromHqInBlocks (street) {
  const distance = street > 42 ? (street - 42) : (42 - street);
  return distance;
}

function distanceFromHqInFeet (street) {
  const blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
  return (endingBlock - startingBlock) * 264;
}

function calculatesFarePrice (startingBlock, endingBlock) {
  
}