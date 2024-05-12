/*
$out aggregation

Takes the documents returned by the aggregation pipeline and writes them to a specified collection. We can specify the output database.

**The $out stage must be the last stage in the pipeline. The $out operator lets the aggregation framework return result sets of any size.**

[NOTE: If the collection specified by the $out operation already exists, then the $out stage atomically replaces the existing collection with the new results collection upon completion of the aggregation.]
*/

// Problem: Add two new field in the existing document and add the fields in a new collection

db.test.aggregate([
    // stage - 1
    { $match: { gender: "Male", age: { $lt: 30 } } },
    // stage - 2
    { $addFields: { course: "Level 2 Web Development", edutech: "Programming Hero" } },
    // stage - 3
    { $project: { course: 1, eduTech: 1 } },
    // stage - 4
    { $out: "course-students" }
])