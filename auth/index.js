let express=  require('express')
 let mongoose=    require('mongoose');
const User = require('./user');
  let bcrypt=   require('bcrypt')
 mongoose.connect('mongodb://127.0.0.1:27017/BGMI').then(()=>{
    console.log('chal gyaaaa...db'); 
  }).catch((err)=>{
    console.log(err);
  })


let app=  express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello')

})
app.post('/create',  async(req,res)=>{
    let user=req.body
     let data=      await  User.findOne({email:user.email})
     if(data){
        res.send('user jinda hai')
     }
     else{
        let updatedPASS=      await   bcrypt.hash(user.passWord,10)
        console.log(updatedPASS,"hehehe");
        // $2b$10$mvD22Ja1hN8zJIQ8g4umLurkxJ/AZ0sHWmzw875IiRzd2zY2Clzdq 
        
        let dbuser=    new User({
            firstName:user.firstName,
            lastName:user.lastNamem,
            email:user.email,
            passWord:updatedPASS
        })
           await dbuser.save()
           res.send('acount cratredddddddddddddd')
     }

  
    // console.log(req.body);
    


})

app.listen(5000,()=>{
    console.log('server running on port no 5000');
    
})