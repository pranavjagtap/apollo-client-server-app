const db = require("./db");
/*
 Query object contains resolver.
 greeting is a resolver for 'greeting' from schema file, this resolver returns a String as mentioned in the schema file
 >> greeting: String

 Now 
*/
const Query = {
  jobs: () => db.jobs.list()
};
module.exports = { Query };
