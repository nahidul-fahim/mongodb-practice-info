/*
$facet aggregation
===============================
Processes multiple aggregation pipelines within a single stage on the same set of input documents. Each sub-pipeline has its own field in the output document where its results are stored as an array of documents.

The $facet stage allows you to create multi-faceted aggregations which characterize data across multiple dimensions, or facets, within a single aggregation stage. Multi-faceted aggregations provide multiple filters and categorizations to guide data browsing and analysis. Retailers commonly use faceting to narrow search results by creating filters on product price, manufacturer, size, etc.
*/

// problem: get the total number of friends and languages in the same pipeline

db.test.aggregate([
    {
        $facet: {
            // pipeline: 1
            "totalFriendsCount": [
                // stage - 1
                { $unwind: "$friends" },
                // stage - 2
                { $group: { _id: "friends", total: { $sum: 1 } } }
            ],

            // pipeline - 2
            "totalLanguage": [
                // stage 1
                { $unwind: "$languages" },
                // stage 2
                { $group: { _id: "friends", total: { $sum: 1 } } }
            ]
        }
    }
])

/* Result
{
    "totalFriendsCount" : [
        {
            "_id" : "friends",
            "total" : 444
        }
    ],
    "totalLanguage" : [
        {
            "_id" : "friends",
            "total" : 297
        }
    ]
}
*/