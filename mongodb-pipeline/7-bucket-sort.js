/*
$bucket aggregation

Categorizes incoming documents into groups, called buckets, based on a specified expression and bucket boundaries and outputs a document per each bucket. Each output document contains an _id field whose value specifies the inclusive lower bound of the bucket. The output option specifies the fields included in each output document.

$bucket only produces output documents for buckets that contain at least one input document.
*/

/*
Bucket syntax -

{
  $bucket: {
      groupBy: <expression>,
      boundaries: [ <lowerbound1>, <lowerbound2>, ... ],
      default: <literal>,
      output: {
         <output1>: { <$accumulator expression> },
         ...
         <outputN>: { <$accumulator expression> }
      }
   }
}
*/

// Problem: Divide people according to age group. From 0-20, 21-40, 41-60, 60-80

db.test.aggregate(
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "Take love old man.",
            output: {
                count: { $sum: 1 }
            }
        }
    }
)

/* Result -
In the following result, _id means the range. _id: 20 = 0 - 2o
{
    "_id" : 20,
    "count" : 13,
    "theAges" : [38, 26, 27, 26, 24, 27, 30, 26, 29, 32, 26, 23, 23]
},
{
    "_id" : 40,
    "count" : 18,
    "theAges" : [48, 50, 47, 54, 59, 48, 45, 50, 40, 56, 56, 59, 44, 53, 58, 53, 59, 56]
},
{
    "_id" : 60,
    "count" : 23,
    "theAges" : [65, 70, 65, 61, 77, 70, 73, 75, 75, 60, 71, 63, 73, 62, 74, 75, 78, 79, 68, 73, 79, 73, 63]
},
{
    "_id" : "Take love old man.",
    "count" : 45,
    "theAges" : [105, 12, 18, 18, 94, 11, 84, 87, 81, 84, 89, 16, 4, 17, 13, 84, 12, 7, 15, 89, 95, 86, 7, 19, 84, 88, 3, 99, 8, 83, 1, 82, 94, 7, 80, 98, 92, 100, 92, 3, 100, 90, 8, "45", 17]
}
*/


// Problem : Now sort the document based on count.
db.test.aggregate(
    // stage - 1
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "Take love old man.",
            output: {
                count: { $sum: 1 }
            }
        }
    },
    // stage - 2
    {
        $sort: { count: -1 }
    }
)

/* Result 
{
    "_id" : "Take love old man.",
    "count" : 45
},
{
    "_id" : 60,
    "count" : 23
},
{
    "_id" : 40,
    "count" : 18
},
{
    "_id" : 20,
    "count" : 13
}
*/