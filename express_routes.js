// express route patterns in get method
// 'ab?cd' is going to match both 'abcd'  and 'acd'
// 'ab+cd' is going to match both 'abbcd' and 'abbbbcd', + means one or more
// 'ab*cd' is going to match 'abANYThingcd'

// '/user/:id' will get params in req.params.id

// route params come in req.params and query params come in req.query