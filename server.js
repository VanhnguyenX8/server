const express = require('express'); 
const path = require('path');

const app = express(); 

const port = 3005; 


// public fodel
app.use('/public', express.static('public'));
// api
app.get('/', function(req, res) {
    // Gửi file HTML CSS khi trang có địa chỉ "/" được truy cập
    res.sendFile(path.join(__dirname, 'public/vanhnguyen.html'));
  });
app.get('/cuong', function(req, res){
    res.json({
        name: "Nguyen Manh Cuong",
        age: "22",
        school: "Hoc Vien Cong Nghe Buu Chinh Vien Thong"
    });
})
app.get('/tuan-anh', function(req, res){
    res.json({
        name: "Le Tuan Anh",
        age: "22",
        school: "Hoc Vien Cong Nghe Buu Chinh Vien Thong"
    });
})
app.get('/viet-anh', function(req, res){
    console.log('da login');
    res.json({
        name: "Nguyen Viet Anh",
        age: "22",
        school: "Hoc Vien Cong Nghe Buu Chinh Vien Thong"
    });
})


app.listen(port, function(){
    console.log("Your app running on port " + port);
})