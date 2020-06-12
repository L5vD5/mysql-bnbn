import "./env"
import  {GraphQLServer}  from "graphql-yoga";
import schema from "./schema";
// import {authenticateJwt} from "./passport";
// import { isAuthenticated } from "./middlewares";
import logger from "morgan";
import express from "express"

const PORT = process.env.PORT || 4000;
const path = require('path');

const sequelize = require('./../models/index').sequelize
sequelize.sync()

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '211.62.225.216',
  user     : 'l5vd5',
  password : 'dbsqud23',
  port     : 3306 ,
  database : 'en'
});

connection.connect();



connection.end();


const server = new GraphQLServer({
    schema,
    context: ({request}) => ({request})
  });

server.express.use(logger("dev"));
// server.express.use(authenticateJwt);

server.start({port:PORT},()=> console.log(`server running on port ${PORT}`));

