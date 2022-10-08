// db.places.find(
//     {
//       location:
//         { $near:
//            {
//              $geometry: { type: "Point",  coordinates: [ -73.9667, 40.78 ] },
//              $minDistance: 1000,
//              $maxDistance: 5000
//            }
//         }
//     }
//  )

db.places.find({
    location: {
        $near: {
            $geometry: { type: 'Point', coordinates: []},
            $maxDistance: 5000
        }
    }
})

db.places.find({ $or: [{ 'fieldName1': 'value1' }, { 'fieldName2': 'value2'}]}, { 'fieldName': 1 });