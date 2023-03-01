let barsMenuAll = document.querySelector(".barsMenuAll");
let bars = document.querySelector(".bars");


bars.addEventListener("click", () =>{
    barsMenuAll.classList.toggle("barsMenuAllToggle");
})
barsMenuAll.addEventListener("click", () =>{
    barsMenuAll.classList.toggle("barsMenuAllToggle");
})

// Fetch codes start
let archCard = document.querySelector(".archCard");
let moreBtn = document.querySelector(".moreBtn");
let numb = 1
moreBtn.addEventListener("click", () =>{
    numb += 1;
    func()
})

fetch("data.json")
.then(response=>response.json())
.then(data=>{
    console.log(data);
    let newItem = ""
    data.slice(0,numb).forEach((item) =>{
        newItem += `<div class="archCardIn">
        <div class="leftLine"></div>
        <div class="archImg">
        <img src="${item.img}" alt="">
    </div>
    <p class="urban">${item.title}</p>
    <p class="congue">${item.text}</p>
    <span>${item.icon}</span>
    </div>`
    })
    archCard.innerHTML = newItem
})

function func(){
    fetch("data.json")
.then(response=>response.json())
.then(data=>{
    console.log(data);
    let newItem = ""
    data.slice(0,numb).forEach((item) =>{
        newItem += `<div class="archCardIn">
        <div class="leftLine"></div>
        <div class="archImg">
        <img src="${item.img}" alt="">
    </div>
    <p class="urban">${item.title}</p>
    <p class="congue">${item.text}</p>
    <span>${item.icon}</span>
    </div>`
    })
    archCard.innerHTML = newItem
})
}


//let fakeData = "https://fakestoreapi.com/products/";
// let moreBtn = document.querySelector(".moreBtn");
// let jsonImgRow = document.querySelector(".jsonImgRow");
// let jsonImg = document.querySelector(".jsonImg");
// let numb = 3;

//     moreBtn.addEventListener("click", ()=>{
//         numb += 3
//         func1()
//     })

//     fetch(fakeData)
//     .then(resp=>resp.json())
//     .then(data=>{
//         let newImg = "";
//         console.log(data);
//         data.slice(0,numb).forEach((item) =>{
//             newImg += `<div class="jsonImgIn">
//             <img src="${item.image}" alt="">
//         </div>`
//         })
//         jsonImgRow.innerHTML = newImg
//     });
// function func1(){
//     fetch(fakeData)
//     .then(resp=>resp.json())
//     .then(data=>{
//         let newImg = "";
//         data.slice(0,numb).forEach((item) =>{
//             newImg += `<div class="jsonImgIn">
//             <img src="${item.image}" alt="">
//         </div>`
//         })
//         jsonImgRow.innerHTML = newImg
//     });
// }
    

    


