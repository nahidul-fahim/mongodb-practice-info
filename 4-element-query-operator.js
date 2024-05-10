// $exists operator

// Syntax for $exists operator - { field: { $exists: <boolean> } }

// Problem - Find the data where the salary field exists.

db.test.find(
    { salary: { $exists: true } }
)

//=========================================================//

// $type operator

// Problem: Find the type of a data

db.test.find({ age: { $type: "number" } })

// Problem: Find the null type data in age

db.test.find({ age: { $age: null } })