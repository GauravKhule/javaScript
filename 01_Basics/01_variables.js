const accountId  = 144553
let accountEmial = "gauravkhule0901@gmail.com"
var accountPassword = "12345"
accountCity = "Akola"
let accountState;

// accountId = 2 // Not allowed bcoz itas constant

accountEmial = "hc@hc.com"
accountPassword = "112244"
accountCity = "Pune"

console.log(accountId);

/* 
Prefer not to use var
bcoz of issue in block scope and functional scope
*/

console.table([accountId, accountEmial, accountPassword, accountCity, accountState])
