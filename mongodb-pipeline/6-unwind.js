/*
$unwind operator -

We cannot work directly on the elements of an array within a document with stages such as $group. The $unwind stage enables us to work with the values of the fields within an array.

Where there is an array field within the input documents, we will sometimes need to output the document several times, once for every element of that array.
*/

// problem: Get the array and return every single time for every element of the array

db.test.aggregate(
    {
        $unwind: "$friends" // It will return every single value from the array.
    },
    // stage 2
    {
        $group: { _id: "$friends", count: { $sum: 1 } }
    }
)


// Problem: 

db.test.aggregate(
    {
        $unwind: "$interests"
    },
    // stage 2
    {
        $group: { _id: "$age", interestPerAge: { $push: "$interests" } }
    }
) // Here, in this example, we have to first unwind this, so that in the group aggregation, it doesn't return double array. If we don't unwind here, then it will return double array for interests.

/* Result if we do the unwind

{
    "_id" : 87,
    "interestPerAge" : [ "Reading", "Cooking", "Travelling" ]
},
{
    "_id" : 90,
    "interestPerAge" : [ "Gardening", "Gaming", "Cooking" ]
},

{
    "_id" : 30,
    "interestPerAge" : [ "Travelling", "Writing", "Cooking" ]
},

{
    "_id" : 98,
    "interestPerAge" : [ "Travelling", "Gaming", "Cooking" ]
},

{
    "_id" : 77,
    "interestPerAge" : [ "Reading", "Cooking", "Gardening" ]
},
*/

/*
Results if don't do the unwind

{
    "_id" : [ "Reading", "Cooking", "Gardening" ],
    "interestPerAge" : [
        [ "Reading", "Cooking", "Gardening" ]
    ]
},
{
    "_id" : [ "Cooking", "Reading", "Gardening" ],
    "interestPerAge" : [
        [ "Cooking", "Reading", "Gardening" ]
    ]
},
{
    "_id" : [ "Travelling", "Gaming", "Cooking" ],
    "interestPerAge" : [
        [ "Travelling", "Gaming", "Cooking" ]
    ]
},
{
    "_id" : [ "Writing", "Gaming", "Cooking" ],
    "interestPerAge" : [
        [ "Writing", "Gaming", "Cooking" ]
    ]
},
*/