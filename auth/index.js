let express=  require('express')
 let mongoose=    require('mongoose');
const User = require('./user');
  let cors=    require('cors')
  let bcrypt=   require('bcrypt')
let jwt=    require('jsonwebtoken')
 mongoose.connect('mongodb://127.0.0.1:27017/BGMI').then(()=>{
    console.log('chal gyaaaa...db'); 
  }).catch((err)=>{
    console.log(err);
  })


let app=  express()
app.use(express.json())
app.use(cors())

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
app.post('/login', async(req,res)=>{
     let loginData=   req.body
       let userData=     await  User.findOne({email:loginData.email})
       if(!userData){
        res.send('plz create your acc.')

       }
       else{
         let validPASSS=    await bcrypt.compare(loginData.passWord,userData.passWord)
         if(!validPASSS){
        res.send('Invalid passswordddd')

         }
         else{
            token=   jwt.sign({email:userData.email},'HEHEHEBDGWEUYGDUEWYF')
            console.log(token);
            
            res.send('login donee')
         }
        
       }


})

app.get('/admin',(req,res)=>{
    res.send('gold')
})



app.listen(5000,()=>{
    console.log('server running on port no 5000');
    
})
// mongosh


// npm i jsonwebtoken