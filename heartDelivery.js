function heartDelivery(input) {
  let neighborhood = input.shift().split("@");
  let lastPosition = 0;
  let checkTwo = false;
  let command = [];
  let cupidHouse = 0;

  command = input.shift().split(" ");
  let i = Number(command[1]);
  for (let i = 0; i < neighborhood.length; i++) {
    neighborhood[i] = parseInt(neighborhood[i], 10);
  }

  for (let i = 0; i < 41; i++) {
    if (neighborhood[i] === 0) {
      console.log(`Place ${i} already had Valentine's day.`);
      i++;
    } else if (neighborhood > 0) {
      neighborhood[i] = -2;
      if (neighborhood[i] === 0) {
        console.log(`Place ${i} has Valentine's day.`);
      }
    }
    if (i > neighborhood.length) {
      checkTwo = true;
      i = 0;
    }
    command = input.shift().split(" ");
    if (command[0] === "Love!") {
      break;
    } else if (command[0] === "Jump") {
      i += Number(command[1]);
    }
    lastPosition = i;
  }
  console.log(`Cupid's last position was ${lastPosition}.`);
  if (cupidHouse < neighborhood.length - 1) {
    console.log(`Cupid has failed ${neighborhood} places.`);
  } else {
    console.log(`Mission was succesful.`);
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
