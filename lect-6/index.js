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
let h2=  document.querySelector('h2')
let p=  document.querySelector('p')
let img=  document.querySelector('img')
fetch('https://dummyjson.com/recipes').then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data.recipes,"hehehehe");
    img.setAttribute('src',data.recipes[0].image)
    h2.innerText=data.recipes[0].name
})
