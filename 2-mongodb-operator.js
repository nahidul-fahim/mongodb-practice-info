// A thumb rule for operator: "Whenever we use a operator, we have to assign a curly braces {} around it."

// $eq operator - Equal to operator
db.test.find({ gender: { $eq: "Male" } }) // It will show me the data where gender are 'Male'

// $ne operator - Not equal to operator
db.test.find({ gender: { $ne: "Male" } }) // It will show me the data that are not equal to 'Male'

// $gt operator - Greater than operator
db.test.find({ age: { $gt: 18 } }) // It will show me the data where the age are greater than '18'

// $gte operator - Greater than or equal operator
db.test.find({ age: { $gte: 30 } }) // It will show me the data where the age are greater than or equal to '30'

// $lt operator - less than operator
db.test.find({ age: { $lt: 18 } }) // It will show me the data where the age are less than '18'

// $lte operator - less than or equal operator
db.test.find({ age: { $lte: 30 } }) // It will show me the data where the age are less than or equal to '30'

// An Extra
db.test.find({ age: { $gte: 30 } }).sort({ age: -1 }) // here using sort operator we can sort the data. '-1' means, it will arrange in large to small and '1' means small to large.


// implicit and

// Problem: Find the age that are greater than 18 and less than 30
db.test.find({ age: { $gt: 18, $lt: 30 } }, { age: 1 }).sort({ age: 1 }) // This method is called implicit and. Here I am defining that, I need people whose ages are greater than 18 and less than 30. Also, by { age: 1 } - I am indicating to show only age here and by sort - I'm asking to sort the data from small to larger.

db.test.find({ gender: "Female", age: { $gt: 18, $lt: 30 } }, { age: 1, gender: 1 }).sort({ age: 1 }) // This is like the upper one. But something extra is added here. By gender: "Female" - I'm asking to show the data whose gender = Female

//=============================================//

// $in operator

/*
The $in operator selects the documents where the value of a field equals any value in the specified array.
*/

// Problem: Find the people who are female and whose ages are even numbers between 30 and 18.
db.test.find({ gender: "Female", age: { $in: [18, 20, 22, 24, 26, 28, 30] } }, { age: 1, gender: 1 }).sort({ age: 1 }) // Here I have used $in operator to find the documents, whose age number matches the numbers in array.

// $nin operator
db.test.find(
    {
        gender: "Female",
        age: { $nin: [18, 20, 22, 24, 26, 28, 30] }
    }).project(
        { age: 1, gender: 1 }
    ).sort(
        { age: 1 }
    )  // $nin operator works exactly opposite of the $in operator. Here, it will exclude all the numbers that are present in the array.