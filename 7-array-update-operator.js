// $push operator

// Append a value to an array. [Add another value to an array]

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    { $push: { interests: "Moving" } }
)

//=========================================================//

// $pop operator

// The $pop operator removes the first or last element of an array. Pass $pop a value of -1 to remove the first element of an array and 1 to remove the last element in an array.

// $pop operator syntax: { $pop: { <field>: <-1 | 1>, ... } }

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    { $pop: { friends: -1 } } // for -1, it will remove the first element of the array.
)

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    { $pop: { friends: 1 } } // for 1, it will remove the last element of the array.
)

//=========================================================//

// $pull operator

// The $pull operator removes from an existing array all instances of a value or values that match a specified condition.

// $pop operator syntax: { $pull: { <field1>: <value|condition>, <field2>: <value|condition>, ... } }

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    { $pull: { friends: "Tanmoy Parvez" } }
)

//=========================================================//

// $pullAll operator

// The $pullAll operator removes all instances of the specified values from an existing array. Unlike the $pull operator that removes elements by specifying a query, $pullAll removes elements that match the listed values.

// $pop operator syntax: { $pullAll: { <field1>: [ <value1>, <value2> ... ], ... } }

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    { $pullAll: { friends: ["Mir Hussain", "Fahim Ahammed Firoz"] } }
)