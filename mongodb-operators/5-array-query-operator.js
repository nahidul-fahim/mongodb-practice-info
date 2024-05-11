// $size operator - Get the size of an array

// Problem: Find the size of friends array

db.test.find({ friends: { $size: 4 } }) // here I'm finding if an array size is 4

//=========================================================//

// $all operator

// Problem: Find the array, where interests are "Traveling", "Gaming", "Reading"

db.test.find(
    { interests: { $all: ["Traveling", "Reading", "Gaming"] } }
).project(
    { interests: 1 }
)

//=========================================================//

// $elemMatch operator

// This operator helps us to find elements in an object.

// Problem: Find the data where skill name is 'JAVASCRIPT' and level is 'Expert'

db.test.find({
    skills: {
        $elemMatch: {
            name: 'JAVASCRIPT',
            level: 'Expert'
        }
    }
}).project({ skills: 1 }) // using $elemMatch, we can find the data in an object very easily. Because it doesn't require to 