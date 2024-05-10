// A thumb rule for operator: "Whenever we use a operator, we have to assign a curly braces {} around it."

// $eq operator - Equal to operator
db.test.find({gender: {$eq: "Male"}}) // It will show me the data where gender are 'Male'

// $ne operator - Not equal to operator
db.test.find({gender: {$ne: "Male"}}) // It will show me the data that are not equal to 'Male'

// $gt operator - Greater than operator
db.test.find({age: {$gt: 18}}) // It will show me the data where the age are greater than '18'

// $gte operator - Greater than or equal operator
db.test.find({age: {$gte: 30}}) // It will show me the data where the age are greater than or equal to '30'

// $lt operator - less than operator
db.test.find({age: {$lt: 18}}) // It will show me the data where the age are less than '18'

// $lte operator - less than or equal operator
db.test.find({age: {$lte: 30}}) // It will show me the data where the age are less than or equal to '30'


// An Extra
db.test.find({age: {$gte: 30}}).sort({age: -1}) // here using sort operator we can sort the data. '-1' means, it will arrange in large to small and '1' means small to large.