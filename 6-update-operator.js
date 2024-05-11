// $set operator

// Problem - Update a primitive data type document using $set 

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") }, // here first, I have to identify the document, that we need to update
    { $set: { age: 105 } } // after finding the document, we can update the document using the $set operator.
) // [If we use $set, in terms of non-primitive data type and update it with primitive data type, then it will replace the whole array]

//=========================================================//

// $push operator

// Append a value to an array. [Add another value to an array]

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    { $push: { interests: "Moving" } }
)






