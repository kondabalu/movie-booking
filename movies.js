let moviename = "salar";
let moviegenre = "action";
let movieyear = 2020;
let rating = 5;
let Hit = true;

//object
let movie = {
    movienamename: "salar",
    moviegenre: "action",
    movieyear: 2020,
    rating: 5,
    Hit: true
}

//array
let movies = [
    { title: "m1", genre: "g1", price: 100 },
    { title: "m2", genre: "g2", price: 200 },
    { title: "m3", genre: "g3", price: 300 }
]

//Practice Exercise 1:
let film = {
    fname: "salaar",
    fgenre: "action",
    factors: ["prabas", "shraddha"],
    fyear: 2020,
    frat: 5,
    fHit: true
}

//// 3 Ways to Create Objects
// 1. Literal Method (Most Common)
let obj1 = {
    nname: "balu",
    age: 25
}
// 2. Empty Object + Properties
let obj2 = {};
obj2.name = "BBB",
    obj2.age = 25,
    obj2.country = "india"
// 3. From Existing Object
let obj3 = Object.create(obj1);
obj3.name = "CCC";
obj3.age = 30;

// 3 Ways to Create Arrays
let price = [200, 100, 400]
let cost = new Array(70, 50, 60)
let alp = Array.from("PRASAD")

//Practice Exercise 2:

let theatre = {
    namee: 'Asian',
    Screens: ["screen1", "screen2", "screen3"],
    facilities: ["AC", "Cafe", "Baby room"],
    Shows: 5,
}

const cinema = {
    name: "Asian Movies",
    location: "Hyderabad",
    movies: [
        {
            title: "RRR",
            shows: ["10:00AM", "2:00PM"],
            seats: [50, 50]
        },
        {
            title: "Salaar",
            shows: ["11:00AM", "3:00PM"],
            seats: [60, 60],
        },
        {
            title: "Pushpa",
            shows: ["12:00PM", "4:00PM"],
            seats: [70, 70],
        }
    ]
};
console.log(cinema.name,cinema.movies[0].title)










console.log(moviename, moviegenre, movieyear, rating, Hit)
console.log(movie)
console.log(movies)
console.log(film)
console.log(obj1)
console.log(obj2)
console.log(price)
console.log(cost)
console.log(alp)
console.log(theatre) 