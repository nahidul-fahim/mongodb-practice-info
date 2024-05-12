/*
$merge aggregation
Writes the results of the aggregation pipeline to a specified collection. The $merge operator must be the last stage in the pipeline.
*/

// Problem: Add two new field in the existing document and add the fields in the existing collection

db.test.aggregate([
    // stage - 1
    { $match: { gender: "Male", age: { $lt: 30 } } },
    // stage - 2
    { $addFields: { course: "Level 2 Web Development", eduTech: "Programming Hero" } },
    // stage - 3
    { $project: { course: 1, eduTech: 1 } },
    // stage - 4
    {$merge: "test"}
]) // If we have to modify original document, then we will use $merge aggregation and if we don't need to modify the original document, rather create a new collection with it, then we will use $out aggregation.