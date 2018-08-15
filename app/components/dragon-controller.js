import DragonService from "./dragon-service.js"

let ds = new DragonService
const app = document.getElementById('app')

function draw(champion) {
    let template = ''
    champion.forEach(champion => {
        template += `
        <div class="champs">
        <h3>${champion.name}</h3>
        <img src="${champion.imgUrl}">        
        </div>`
    })
    app.innerHTML = template
}


export default class DragonController {
    constructor() {
        ds.getChamps(draw)
    }
}
