const findTheOldest = function(people) {
    const date = new Date();
    const currentYear = date.getFullYear();

    people.sort((person1, person2) => {

        // Check if person1 has died
        if (person1.yearOfDeath === undefined) {
            person1Age = currentYear - person1.yearOfBirth;
        }
        else {
            person1Age = person1.yearOfDeath - person1.yearOfBirth;
        }

        // Check if person2 has died
        if (person2.yearOfDeath === undefined) {
            person2Age = currentYear - person2.yearOfBirth;
        }
        else {
            person2Age = person2.yearOfDeath - person2.yearOfBirth;
        }

        return person1Age >= person2Age ? -1 : 1;
    });
    
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
