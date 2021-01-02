const { DataStore } = require('notarealdb');
// notarealdb package is used instead of actual db
const store = new DataStore('./data');

module.exports = {
  companies: store.collection('companies'),
  jobs: store.collection('jobs'),
  users: store.collection('users')
};
