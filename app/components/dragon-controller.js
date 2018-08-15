import DragonService from "./dragon-service.js"
import Dragon from "../../models/Dragon.js";

let ds = new DragonService
const app = document.getElementById('app')

function draw(champion) {
    let template = ''
    champion.forEach(champion => {
        template += `
        <div id="champs">
        <h3>${champion.name}</h3>
        <h4>${champion.race} ${champion.class}</h4>
        <h5>HP: ${champion.hp}</h5>
        <img src="${champion.imgUrl}">  
        <button onclick="app.controllers.dragonCtrl.setActiveChamp()">Choose Champ</button>      
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
        <h4>Max HP: ${drags.maxHP}<h4>
        <img src="${drags.imgUrl}">
        <button onclick="app.controllers.dragonCtrl.setActiveDragon()">Choose Dragon</button>
        </div>
        `
    })
    document.getElementById('drags').innerHTML = template
}

function drawGame(gameId) {
    let template = `
    <div> 
    <div><img src="${dragonId.name}/></div>
    <h6>HP: ${dragonId.currentHP}</h6>
    <div><img src="${dragonId.imgUrl}/></div>
    </div>
    <div> 
    <div><img src="${championId.name}/></div>
    <h6>HP: ${championId.currentHP}</h6>
    <div><img src="${championId.imgUrl}/></div>
    <button>${championId.attacks}
    </div>
    `
    app.innerHTML = template

}


export default class DragonController {
    constructor() {
        ds.getChamps(draw)
        ds.getDrags(drawDrags)
    }
    setActiveChamp(champId) {
        ds.setActiveChamp(champId)
    }
    setActiveDragon(dragonId) {
        ds.setActiveDragon(dragonId)
    }
    drawGame() {
        ds.startGame()
    }

}
