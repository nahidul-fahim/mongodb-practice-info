// $set operator to update a field of an object

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    {
        $set:
            { "address.city": "Chattogram" }

    }
)

// update multiple field of an object

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    {
        $set:
        {
            "address.city": "Chattogram",
            "address.country": "Bangladesh"
        }

    }
)

//=========================================================//

// Update array of objects

// Problem: Update an array of objects

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065"), "skills.isLearning": false }, // here I'm getting to exact path, where I want to update the array of objects
    {
        $set:
        {
            "skills.$.isLearning": true, // Here the dollar sign is called 'Positional operator'. We have to use it to update first document that matches with out query
        }

    }
)