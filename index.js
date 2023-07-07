// This code work the creat the server with node.js
// This is The First Way of creat Server

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




//Express ==> Now we will creat the server with express.js
const express = require("express");
const app = express();
const product = require('./product');

// this is the first get request
app.get("/",(req,res) =>{
res.send("<h4>Hello everyOne</h4>")
})

// Now we will creat another page "and chack with /about"
app.get("/about",(req,res) =>{
  res.send("about page")
  })

  // another get request
  app.get("/creat",(req,res) =>{
    // if we will console then we can see all server request in the run time
    console.log(res);
    res.send("This Browser is Creat By Me")
    })

    // Now WE will Post request==> "Post Requst chack only the postmen no the browser"
    app.post("/ticket",(req,res)=>{
      res.send("This is our Post request");
    })

    // How We import the other file ==>"Firstly We will import the file in top after the export the file"
    // "This is static path"
    app.get("/product",(req,res) =>{
      res.send(product);
    })

    // In this process we console "paramsreq.value" and we pas any value in our postmen then we can see out pas value in our terminal this is entresting
    // "This is dynamic path"
    // value is perametar in this code
    // Chack example this way ==> "localhost:3000/product/12434234223"
    // we can add multple value
    // app.get("/product/:value",(req,res) =>{
    //   console.log(req.params);
    //   res.send(product);
    // })

    // We add also mltple value
    // app.get("/product/:value/:anothervalue",(req,res) =>{
    //   console.log(req.params);
    //   res.send(product);
    // })

    app.get("/product/:value/:anothervalue",(req,res) =>{
   const products=product.productData.find((products)=>products.value===req.params.value);
   console.log(req.params);
   return res.send(products);
    })


const port = 3000;
app.listen(port,() =>{
    console.log("Youe Application is running in The Port");
})
