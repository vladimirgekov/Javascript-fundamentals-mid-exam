function nationalCourt(input) {
  let firstEmployee = Number(input.shift());
  let secondEmployee = Number(input.shift());
  let thirdEmployee = Number(input.shift());
  let totalPeople = Number(input.shift());
  let answeredPeople = 0;
  let totalHours = 0;

  let countOfPeoplePerHour = firstEmployee + secondEmployee + thirdEmployee;

  while (answeredPeople < totalPeople) {
    totalHours++;

    if (totalHours % 4 === 0) {
      continue;
    } else {
      answeredPeople += countOfPeoplePerHour;
    }
  }
  console.log(`Time needed: ${totalHours}h.`);
}
nationalCourt(["5", "6", "4", "20"]);
