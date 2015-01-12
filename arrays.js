// 1

var friends = [
                'Moe', 
                'Larry', 
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];

console.log(friends[friends.length - 1]);



// 2

var sorted = friends.sort();
console.log(sorted);



// 3

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

sum = 0;
for (i = 0; i < ages.length; i++) {
  sum += ages[i];
}
average = sum / ages.length
console.log(average);



// 4

var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";
sorted = friends.split(",").sort().toString();
console.log(sorted);


// 5


var myFriends = [
                  'Rickon',
                  'Meera',
                  'Hodor',
                  'Jojen',
                  'Osha',
                  'Rickard',
                  'Maester',
                  'Rodrik',
                  'Jory',
                  'Septa',
                  'Jon'
                ];

var yourFriends = [
                    'Bilbo',
                    'Boromir',
                    'Elrond',
                    'Faramir',
                    'Frodo',
                    'Gandalf',
                    'Legolas',
                    'Pippin'
                  ];

var ourFriends = myFriends.concat(yourFriends).sort();
console.log(ourFriends);


// 7

var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];

function findRanking(foodItem) {
  return foods.indexOf(foodItem) + 1;
}

console.log(findRanking("Pho"));


// 8

function removeItem(foodItem) {
  foods.splice(foods.indexOf(foodItem), 1);
}

removeItem("Donuts");
console.log(foods);


// 9

for (i = 4; i < 10; i++) {
  console.log(foods[i])
}


// 10

var data = [["Moe", 18], ["Larry", 19], ["Curly", 20]];

for (i = 0; i < data.length; i++) {
  name = data[i][0];
  age = data[i][1];
  console.log(name + " is " + age);
}

