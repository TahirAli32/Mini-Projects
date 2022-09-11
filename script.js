let userData
if (localStorage.getItem('userData') == null){
    userData = []
    localStorage.setItem('userData', JSON.stringify(userData))
}
else{
    userData = JSON.parse(localStorage.getItem('userData'))
}

const handleSubmit = () => {
    let data = {}
    let flag = false

    let inputTags = document.getElementsByTagName('input')
    inputTags = Object.entries(inputTags)
    inputTags.forEach((element) => {
        if(!element[1].value.match(/([^\s])/)){
            if(element[1].nextSibling.nextSibling){
                element[1].nextSibling.nextSibling.remove()
            }
            element[1].classList.add('emptyErr')
            const node = document.createElement("span")
            node.setAttribute("class", "text-danger ml-1")
            const textnode = document.createTextNode("Field cannot be Empty")
            node.appendChild(textnode)
            element[1].parentNode.appendChild(node)
            flag = true
        }
        else{
            element[1].classList.remove('emptyErr')
            if(element[1].nextSibling.nextSibling){
                element[1].nextSibling.nextSibling.remove()
            }
        }
    })
    if(!flag){
        let formSubmit = document.getElementById('formSubmit')
        formSubmit.classList.remove('d-none')
        setTimeout(function(){
            formSubmit.classList.add('d-none')
        }, 2000)
        inputTags.forEach((element) => {
            data[element[1].id] = element[1].value
            element[1].value = ""
        })
        userData.push(data)
        localStorage.setItem('userData', JSON.stringify(userData))
    }
    
}

const handleAdmin = () => {
    const dataTable = document.getElementById("dataTable")
    if(userData.length){
        userData.forEach((element, index) => {
            dataTable.innerHTML += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.fname}</td>
                <td>${element.address}</td>
                <td>${element.mno}</td>
                <td>${element.edu}</td>
            </tr>`
        })
    }
    else{
        dataTable.parentNode.parentNode.innerHTML = "<h2 class='text-center mt-5'>No Records in Our Database</h2>"
    }
}