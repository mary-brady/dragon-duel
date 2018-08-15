import DragonService from "./dragon-service.js"
import Dragon from "../../models/Dragon.js";

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

function drawDrags(drags) {
    let template = ''
    drags.forEach(drags => {
        template += `
        <div>
        <h3>${drags.name}</h3>
        <img src="${drags.imgUrl}">
        </div>
        `
    })
    document.getElementById('drags').innerHTML = template
}


export default class DragonController {
    constructor() {
        ds.getChamps(draw)
        ds.getDrags(drawDrags)
    }
}
