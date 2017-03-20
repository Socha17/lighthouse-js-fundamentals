function whichSchool(age) {


  if (age >= 13 && age <= 18) {
    return("Secondary School");
  } else if (age > 18 && age < 100) {
    return("Lighthouse Labs");
  } else if (age < 13) {
    return("Elementary School");
  }

  return age
}


console.log("I am 19. Which school should I go to?");
(whichSchool(19));
console.log("I am 13. Which school should I go to?");
(whichSchool(13));
console.log("I am 1. Which school should I go to?");
(whichSchool(1));
