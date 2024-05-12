/*
$group aggregation

With the $group stage, we can perform all the aggregation or summary queries that we need, such as finding counts, totals, averages or maximums.

The $group stage separates documents into groups according to a "group key". The output is one document for each unique group key.

A group key is often a field, or group of fields. The group key can also be the result of an expression. Use the _id field in the $group pipeline stage to set the group key.

Operator	Meaning
-------------------------------------------------------------------------------
$count	    Calculates the quantity of documents in the given group.
$max	    Displays the maximum value of a document’s field in the collection.
$min	    Displays the minimum value of a document’s field in the collection.
$avg	    Displays the average value of a document’s field in the collection.
$sum	    Sums up the specified values of all documents in the collection.
$push	    Adds extra values into the array of the resulting document.
*/

// [IMPORTANT NOTE: Whenever we use a field name in group, we have to use '$' sign before that to refer that field. Otherwise, it won't work.]


// A simple example:

db.test.aggregate(
    { $group: { _id: "$course", total: { $sum: 1 } } } // total: { $sum: 1 } - this field is known as accumulator
) // Here it will group according to 'course' fields and total will specify the total number of documents in each group
/*
{
    "_id" : null,
    "total" : 86
}, 
{
    "_id" : "Level 2 Web Development",
    "total" : 13
}
*/


// Problem: Show the name of the fields

db.test.aggregate(
    { $group: { _id: "$address.country", total: { $sum: 1 }, showMeName: { $push: "$name" } } }
) // Here I'm grouping according to country. And in 'showMeName' field, I am referring to the 'name' field to show it.


// show all the fields

db.test.aggregate(
    { $group: { _id: "$address.country", total: { $sum: 1 }, allFields: { $push: "$$ROOT" } } }
) // By using $$ROOT, we are commanding to show all the available fields


// show only name, email and phone number from the allFields

db.test.aggregate(
    {
        $group: {
            _id: "$address.country",
            allFields: { $push: "$$ROOT" }
        }
    },
    // stage - 2
    {
        $project: {
            "allFields.name": 1,
            "allFields.email": 1,
            "allFields.phone": 1,
        }
    }
)