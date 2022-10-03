function dogSays(dogName, dogWeight) {
  if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
  } else {
    console.log(dogName + " says woof woof");
  }
}

dogSays("Rover", 30);
dogSays("Rover", -1);
dogSays("Rover", 0, 0);
dogSays("Rover", "20");
dogSays("Rover", 20);
/* 

dogName = "rover";
dogWeight = 23;

dogName = "spot";
dogWeight = 13;

dogName = "spike";
dogWeight = 53;

dogName = "lady";
dogWeight = 17;

*/
