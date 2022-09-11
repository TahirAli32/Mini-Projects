let data = {
    Apple: [
        {
            model: "Iphone 7s",
            price: "200",
            color: ['red', 'gold'],
            isPTA: true,
            condition: "8/10",
            isBrandNew: false,
            // img: ["iphone-7-red.jpg", "iphone-7-gold.jpg"]
            img: "./img/iphone-7-red.jpg"
        },
        {
            model: "Iphone 8",
            price: "180",
            color: ['black', 'white', 'gold'],
            isPTA: false,
            condition: "8/10",
            isBrandNew: false,
            img: "./img/iphone-8-all.jpg"
        },
        {
            model: "Iphone X",
            price: "800",
            color: ['gold', 'black', 'gray'],
            isPTA: true,
            condition: "10/10",
            isBrandNew: true,
            img: "./img/iphone-x-all.jpg"
        },
        {
            model: "Iphone 12 Pro Max",
            price: "1000",
            color: ['whit', 'black', 'gold', 'blue'],
            isPTA: true,
            condition: "10/10",
            isBrandNew: true,
            img: "./img/iphone-12-all.jpg"
        }
    ],
    Samsung: [
        {
            model: "Galaxy S9",
            price: "99",
            color: ['red'],
            isPTA: true,
            condition: "7/10",
            isBrandNew: false,
            img: "./img/samsung-s9-red.jpg"
        },
        {
            model: "Galaxy S10",
            price: "110",
            color: ['blue'],
            isPTA: true,
            condition: "8/10",
            isBrandNew: false,
            img: "./img/samsung-s10-blue.jpg"
        },
        {
            model: "Galaxy S21 Ultra",
            price: "500",
            color: ['black', 'blue', 'brown'],
            isPTA: false,
            condition: "10/10",
            isBrandNew: true,
            img: "./img/samsung-s21-ultra-all.jpg"
        },
        {
            model: "Galaxy S22 Ultra",
            price: "1000",
            color: ['red', 'purple', 'green', 'black', 'white'],
            isPTA: true,
            condition: "10/10",
            isBrandNew: true,
            img: "./img/samsung-s22-ultra-all.jpg"
        }
    ],
    Oppo: [
        {
            model: "Reno 6 Pro",
            price: "550",
            color: ['red', 'blue', 'black'],
            isPTA: true,
            condition: "10/10",
            isBrandNew: true,
            img: "./img/oppo-reno-6-pro.jpg"
        },
        {
            model: "F17 Pro",
            price: "400",
            color: ['blue', 'gray', 'green', 'red'],
            isPTA: true,
            condition: "9/10",
            isBrandNew: false,
            img: "./img/oppo-f17-pro.jpg"
        },
        {
            model: "A53",
            price: "150",
            color: ['black', 'blue', 'brown'],
            isPTA: false,
            condition: "10/10",
            isBrandNew: true,
            img: "./img/oppo-a53.jpg"
        },
        {
            model: "A12",
            price: "200",
            color: ['black', 'white', 'lightblue'],
            isPTA: true,
            condition: "9/10",
            isBrandNew: false,
            img: "./img/oppo-a12.jpg"
        }
    ],
    Vivo: [
        {
            model: "X80",
            price: "800",
            color: ['purple', 'blue', 'red', 'black', 'white'],
            isPTA: true,
            condition: "10/10",
            isBrandNew: true,
            img: "./img/vivo-x80.jpg"
        },
        {
            model: "V23",
            price: "700",
            color: ['gold', 'black', 'red'],
            isPTA: true,
            condition: "10/10",
            isBrandNew: true,
            img: "./img/vivo-v23.jpg"
        },
        {
            model: "Y53s",
            price: "90",
            color: ['black', 'white', 'brown'],
            isPTA: true,
            condition: "8/10",
            isBrandNew: false,
            img: "./img/vivo-y53s.jpg"
        },
        {
            model: "Y21t",
            price: "100",
            color: ['black', 'white', 'lightblue', 'red'],
            isPTA: false,
            condition: "10/10",
            isBrandNew: true,
            img: "./img/vivo-y21t.jpg"
        }
    ]
}

function fetchData (){
    let mobileListBody = document.getElementById('mobiles')
    document.getElementById('category').classList.remove("none")

    let allCategories = document.getElementsByClassName('categoryTab')
    for(let i=0; i<allCategories.length;i++){
        allCategories[i].classList.remove("active")
    }
    allCategories[0].classList.add("active")

    let str = ""
    let clr = ""
    for(let i=0; i<Object.keys(data).length;i++){
        let company = Object.keys(data)[i]
        for(item in data[company]){
            let mobiles = data[company][item]
            for(const e of mobiles.color){
                clr += `<div style="background-color: ${e};" class="dot pointer"></div>`
            }
            str += `
                <div class="card small m-2" style="width: 19rem;">
                    <img src='${mobiles.img}' width="250px" height="250px" class="m-0 p-0 card-img-top" alt="${mobiles.model}">
                    <div class="card-body">
                        <h5 class="card-title py-0 my-0">${company} ${mobiles.model}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Condition: <b>${mobiles.condition}</b></li>
                        <li class="list-group-item">Brand New: <b>${mobiles.isBrandNew ? "Yes" : "No"}</b></li>
                        <li class="list-group-item">PTA Approved: <b>${mobiles.isPTA ? "Yes" : "No"}</b></li>
                    </ul>
                    <div class="card-body text-center">
                        <h6>Colors Available: </h6>
                        <div class="dots">
                            ${clr}
                        </div>
                        <h5 class="border-top pt-2 mt-3 w-100">Price: </h5>
                        <div class="price ">${mobiles.price}<span>$</span></div>
                    </div>
                </div>
            `
            clr= ""
        }
        mobileListBody.innerHTML = str;
    }
}
fetchData()

function handleKeyPress(event){
    if(event.keyCode === 13){
        handleSearch()
    }
}

function removeModal(){
    document.getElementById('errorModal').style.display = 'none'
    fetchData()
}

function handleSearch(){
    let companyInput = document.getElementById("companyList").value
    let modelInput = document.getElementById("mobileModel").value
    // let companyInput = "Apple"
    // let modelInput = "iPhoNe 7s"
    let mobileListBody = document.getElementById('mobiles')
    
    let mobile = data[companyInput]
    let flag = false
    let pointer

    mobileListBody.innerHTML = ""
    document.getElementById('category').classList.add("none")

    for(item in mobile){
        if(mobile[item].model.toLowerCase() === modelInput.toLowerCase()){
            flag = true
            pointer = item
            break
        }
    }
    if(flag){
        document.getElementById('errorModal').style.display = 'none'

        let searchedModel = mobile[pointer]
        let str = ""
        let clr = ""
        for(const e of searchedModel.color){
            clr += `<div style="background-color: ${e};" class="dot pointer"></div>`
        }
        str = `
            <div class="d-flex flex-column">
                <h2 class="mb-3 text-decoration-underline text-info pointer" onclick="fetchData()">View All Mobile</h2>
                <div class="card small m-2" style="width: 19rem;">
                    <img src='${searchedModel.img}' width="250px" height="250px" class="m-0 p-0 card-img-top" alt="${searchedModel.model}">
                    <div class="card-body">
                        <h5 class="card-title py-0 my-0">${companyInput} ${searchedModel.model}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Condition: <b>${searchedModel.condition}</b></li>
                        <li class="list-group-item">Brand New: <b>${searchedModel.isBrandNew ? "Yes" : "No"}</b></li>
                        <li class="list-group-item">PTA Approved: <b>${searchedModel.isPTA ? "Yes" : "No"}</b></li>
                    </ul>
                    <div class="card-body text-center">
                        <h6>Colors Available: </h6>
                        <div class="dots">
                            ${clr}
                        </div>
                        <h5 class="border-top pt-2 mt-3 w-100">Price: </h5>
                        <div class="price">${searchedModel.price}<span>$</span></div>
                    </div>
                </div>
            </div>
        `
        mobileListBody.innerHTML = str
    }
    else{
        document.getElementById('errorModal').style.display = 'flex'
    }
}

function showCategory(category, event){

    let allTabs = document.getElementsByClassName('categoryTab')
    for(let i=0; i<allTabs.length;i++){
        allTabs[i].classList.remove("active")
    }
    event.currentTarget.classList.add("active")

    let mobileListBody = document.getElementById('mobiles')
    let str = ""
    let clr = ""
    for(item in data[category]){
        let mobiles = data[category][item]
        for(const e of mobiles.color){
            clr += `<div style="background-color: ${e};" class="dot pointer"></div>`
        }
        str += `
            <div class="card small m-2" style="width: 19rem;">
                <img src='${mobiles.img}' width="250px" height="250px" class="m-0 p-0 card-img-top" alt="${mobiles.model}">
                <div class="card-body">
                    <h5 class="card-title py-0 my-0">${category} ${mobiles.model}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Condition: <b>${mobiles.condition}</b></li>
                    <li class="list-group-item">Brand New: <b>${mobiles.isBrandNew ? "Yes" : "No"}</b></li>
                    <li class="list-group-item">PTA Approved: <b>${mobiles.isPTA ? "Yes" : "No"}</b></li>
                </ul>
                <div class="card-body text-center">
                    <h6>Colors Available: </h6>
                    <div class="dots">
                        ${clr}
                    </div>
                    <h5 class="border-top pt-2 mt-3 w-100">Price: </h5>
                    <div class="price">${mobiles.price}<span>$</span></div>
                </div>
            </div>
        `
        clr= ""
        mobileListBody.innerHTML = str;
    }
}

function openTab(event){
    let allTabs = document.getElementsByClassName('categoryTab')
    for(let i=0; i<allTabs.length;i++){
        allTabs[i].classList.remove("active")
    }
    event.currentTarget.classList.add("active")
    fetchData()
}