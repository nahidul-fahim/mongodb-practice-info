// $match operator

// Problem: Find all the data, where gender = Male and age are less than 30

// [NOTE: In mongodb aggregation framework, they maintain a stage, if we miss anything in the first stage, then we won't get that data in the next stage]

db.test.aggregate([
    { $match: { gender: "Male", age: { $lt: 30 } } }, // Stage - 1
    { $project: { ageL: 1, gender: 1, name: 1 } } // stage - 2 [We will try to use the project at the end of everything, so that we can show the data that are needed.]
])