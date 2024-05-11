// $and operator - 
/*
$and performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.
*/

// Problem: Find the female whose age are less than on equal to 30. But exclude the female whose age are 29.

db.test.find({
    $and: [
        { gender: "Female" },
        { age: { $ne: 29 } },
        { age: { $lte: 30 } }
    ]
}).project(
    { age: 1 }
).sort(
    { age: -1 }
) // Here using explicit $and operator, we can write multiple condition. The conditions here are, gender will be female. Age will be less than or equal to 30 and age 29 will be excluded because of ($ne) operator. In explicit $and operator, all the equations might be satisfied.

//=========================================================//

// Explicity $or operator 


// Problem: Find the people who are skilled either in JavaScript or in Python

db.test.find({
    $or: [
        { "skills.name": "JAVASCRIPT" },
        { "skills.name": "PYTHON" },
    ]
}).project(
    { skills: 1 }
) // In explicit $or operator, it needs to satisfy any one condition.

// If the field name is same we can do the same operation using $in operator.

db.test.find({
    "skills.name": { $in: ["JAVASCRIPT", "PYTHON"] }
}).project(
    { skills: 1 }
)

//=========================================================//

// $not operator

// Problem: Find the data of the people that excludes "Female" and whose age not greater or equal to 25.

db.test.find({
    age: { $not: { $gte: 25 } },
    gender: { $not: { $in: ["Female"] } },
}).project(
    { age: 1, gender: 1 }
)

//=========================================================//

// $nor operator

// Problem: Find the data that exclude the mail and age 1

db.test.find(
    {
        $nor: [
            { gender: "Female" },
            { age: 1 }
        ]
    }
).project(
    { age: 1, gender: 1 }
).sort(
    { age: 1 }
)