console.log('look ma, my first express app! 🌿');

//source in file 
//give variable to node_module
const express = require('express');

//Create our "app" Server 
const app = express();


//Tell express where to find all 
//of our public files
//"Static Assets"
//client side files
app.use(express.static('./server/public'));

//listen for request
const port = 5000; 
app.listen (5000, function(){
        // kind of like our onReady 
        console.log('App is up and running on localhost:5000 🏃');
});