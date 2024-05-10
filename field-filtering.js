// I am doing the practice in no sql booster app and copying the code from there.

// Field filtering
db.test.find({ gender: "Male" }, { name: 1, gender: 1, age: 1 }) // Here I am getting the only needed field, which are name, gender and age

// We can achieve the field filtering method using 'project'
db.test.find({ gender: "Male" }).project({ name: 1, gender: 1, age: 1 }) // Field filtering using 'project' || [NOTE: 'project' doesn't work with 'findOne' method. In that case, we have to use the first method.]

