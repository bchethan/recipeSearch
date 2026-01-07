const generateBtn = document.getElementById("generate-btn")
const details = document.getElementById("details")

generateBtn.addEventListener("click",callBackend)

async function callBackend(){
    
    const response = await fetch('http://localhost:8000/api')
    const data = await response.json()

    details.innerHTML = `<h2>${data.recipes[0].title}</h2>
    <img src="${data.recipes[0].image}">
    <p>${data.recipes[0].summary}</p>
    <h4>Instructions:</h4>
    <p>${data.recipes[0].instructions}</p>
    <h4>for more details click <a href="${data.recipes[0].sourceUrl}"  target="_blank">here</h4>
    `
}