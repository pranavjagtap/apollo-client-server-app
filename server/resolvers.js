/*
 Query object contains resolver.
 greeting is a resolver for 'greeting' from schema file, this resolver returns a String as mentioned in the schema file
 >> greeting: String
*/
const Query = {
  greeting: () => "Hello World!"
};
module.exports = { Query };
