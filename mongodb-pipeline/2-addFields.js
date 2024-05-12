// $addFields operator

/*
Adds new fields to documents. $addFields outputs documents that contain all existing fields from the input documents and newly added fields.

The $addFields stage is equivalent to a $project stage that explicitly specifies all existing fields in the input documents and adds the new fields.
*/

// Syntax - { $addFields: { <newField>: <expression>, ... } }

// [NOTE: $addFields doesn't modify the original document. It just adds required fields in the pipeline and return that to us]

db.test.aggregate([
    // stage - 1
    { $match: { gender: "Male", age: { $lt: 30 } } },
    // stage - 2
    { $addFields: { course: "Level 2 Web Development" } },
    // stage - 3
    { $project: { course: 1 } }
])