// // https://github.com/Rupesh155/workshop15
// let btn=  document.querySelector('button')
// let inp=  document.querySelector('input')

// btn.addEventListener('click',()=>{
//     let apiKey='9f6290d6cda9a36a63755fadee71f83d'
// let city=inp.value
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).
// then((res)=>{
//     return res.json()

// }).then((data)=>{
//     console.log(data,"heheh");
//     h2.innerText=data.name
//     p.innerText=data.main.temp
    

// })

// })

fetch('https://dummyjson.com/recipes').then((res)=>{
    return res.json()

}).then((data)=>{
    api(data.recipes)
    // console.log(data.recipes,"hehehehe");
  
// data.recipes.map((val)=>{
//     console.log(val,"heheheheh");
    

//     img.setAttribute('src',)
    
// })

//     img.setAttribute('src',data.recipes[0].image)
//     h2.innerText=data.recipes[0].name
})




function api(apiData){
    let div=  document.querySelector('div')
    console.log(apiData,"helloo");
    for(let val of apiData){
    //  let img=    document.createElement('img')
    // document.querySelector()
            let h2=  document.createElement('h2')
    // let p=  document.querySelector('p')

    img.setAttribute('src', val.image)
    h2.innerText=val.name
    div.append(img,h2)

    }

    

}




// sum(5)
// function sum(a)
// {

// }
