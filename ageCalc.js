


function ageCalculator(name, birthYear, currentYear) {

  var age = currentYear - birthYear;
  return name + " is " + age + " years old.";
}


console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Jack", 2003, 2015));
console.log(ageCalculator("Ali", 2015, 2015));
