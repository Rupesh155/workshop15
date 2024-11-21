
let inp=   document.querySelector('input')
let btn=   document.querySelector('button')

btn.addEventListener('click',()=>{
    let searchText=inp.value
fetch(` https://api.tvmaze.com/search/shows?q=${searchText}`).
then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data);
    

})

})
