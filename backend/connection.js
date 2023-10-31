const mongo = require("mongoose");
  exports.connect= () => {
    try {
        mongo.connect("mongodb+srv://karthiikkishore:yZHUbglmCnwMS9Vc@cluster0.7rt7vbx.mongodb.net/Blog");
        console.log("DB Connection successfull");
    } catch (error) {
        console.error(error);
    }
}