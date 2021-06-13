// const { MONGO_URI } = require("./config");
const container = require("./startup/container");
const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config"); 

const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
mongoose.connect(MONGO_URI, { useNewUrlParser: true,
     useFindAndModify: false }).then(()=>{
         server.start()
     }).catch(console.log)