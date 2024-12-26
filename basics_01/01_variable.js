const accountId = 144553
let accountEmail = "divyanshu@gmail.com"
var accontPassword = "123445"
accountCity = "Jaipur" // variable can be declare like this also but this method is not preferable
let accountState; //if variable is left as it is without giving value its value is given undefined

// accountId = 2 // not allowed value is fixed it can not be changed

accountEmail = "dc@dc.com"
accontPassword = "2121212"
accountCity = "Delhi"


console.log(accountId);

/*
Note: Prefer not to use var
because of issue in block space and function scope

*/

console.table([accountId,accontPassword,accountEmail,accountCity])