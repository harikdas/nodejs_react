var express = require('express');
var router = express.Router();
var data= require('../data/product.json')
var nanoid = require('nanoid');
var fs = require('fs');
const util = require('util')
const fsunlink = util.promisify(fs.unlink)

// console.log(data);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titles: 'Express' });
});
router.get('/products', function(req, res, next) {
  let pro=
    {
      "id":nanoid(),
      "name":"samsung",
      "description":"smthng about samsung",
      "price":22200.12,
      "id":"V1StGXR8_Z5jdHi6B-myT0",
      "status":1
  }
  
  
  console.log(nanoid());
  
  res.json({ res: data,Data:pro });
});
router.post('/add-product',(req,res)=>{
  console.log(req.body)
// fs.writeFile('myjsonfile.json', json, 'utf8', callback);

// })

fs.readFile(__dirname+'/../data/product.json', 'utf8', function readFileCallback(err, data){
  if (err){
      console.log(err);
      res.json({success:false})
  } else {
  obj = JSON.parse(data); //now it an object
  let newObj = {
    "id":nanoid(),
    "name":req.body.name,
    "description":req.body.description,
    "price":req.body.price,
    "status":req.body.status
  }
  obj.push(newObj); 
  json = JSON.stringify(obj); 
  fs.writeFile(__dirname+'/../data/product.json', json, 'utf8');
  res.json({success:true}) 
}});
})
module.exports = router;


















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































