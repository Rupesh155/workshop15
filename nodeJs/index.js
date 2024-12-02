// // console.log('helloooo');
// //   let fs=    require('fs')
// //   fs.writeFileSync('index.html','helllooo')
// //   let data=   fs.readFileSync('index.html')
// //   console.log(data.toString());

// //   fs.unlinkSync('index.html')
// //   start =>  node index

// // let joke=    require('give-me-a-joke')
// // joke.getRandomDadJoke((data)=>{
// //     console.log(data);
// // })

// let express=  require('express')
//  let app=   express()

// //  app.use((req,res,next)=>{
// //     // res.send('nhi jane dungaaaa')
// //     next()
// //  })
// 7089030994   

// //  app.use((req,res,next)=>{
// //     // res.send('mai to bilkul nhi jane dunga')
// //     next()
// //  })



// //  app.get('/',(req,res)=>{
// //     res.send('hello mai hu kaun...server hehehe')


// //  })

//  http://localhost:4000/search?firstname=rahul&&lastaname=kumar
// //  app.get('/search',(req,res)=>{
// //      let {firstname,lastaname}=   req.query
// //     res.send(`${firstname}  ${lastaname}`)

// //  })
// //  app.get('/:name',(req,res)=>{
// //     let {name}=    req.params
// //     res.send(name)
// //  })
//  https://www.reddit.com/r/cats/

//  http://localhost:4000/
// //  app.get('/about',(req,res)=>{
// //     res.send('kyaa bhej duuu')
// //  })
                                                                                                                                                 
//  app.listen(4000,()=>{
//     console.log('server running on port no. 4000');
    
//  })
// //  npx nodemon start


// // {
// //    id:1,
// //    name:"hello"
// // }


let express=   require('express')
 let mongoose=   require('mongoose')
 mongoose.connect('mongodb://127.0.0.1:27017/BGMI').then(()=>{
   console.log('chal gyaaaa...db'); 
 }).catch((err)=>{
   console.log(err);
 })
let app=    express()
app.get('/',(req,res)=>{
   res.send('hellooo')

})
app.listen(2000,()=>{
   console.log('server running on port no 2k');
   
})





  



