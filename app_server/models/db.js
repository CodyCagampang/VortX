const mongoose = require('mongoose');

const dbURI = "mongodb+srv://codycagampang_db_user:o(>!ZT8D4C69@cluster0.xyrzwtm.mongodb.net/?appName=Cluster0";
try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}



require('./teams');
