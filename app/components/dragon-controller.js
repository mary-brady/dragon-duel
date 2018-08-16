import DragonService from "./dragon-service.js";
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
        <button onclick="app.controllers.dragonCtrl.setActiveChamp(${champion.id})">Choose Champ</button>      
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
        <button onclick="app.controllers.dragonCtrl.setActiveDragon(${drags.id})">Choose Dragon</button>
        </div>
        `
    })
    document.getElementById('drags').innerHTML = template
}

function drawGame(dragon, champion) {
    // ds.startGame()
    let template = `
    <div> 
    <div><img src="${dragon.name}/></div>
    <h6>HP: ${dragon.currentHP}</h6>
    <div><img src="${dragon.imgUrl}/></div>
    </div>
    <div> 
    <div><img src="${champion.name}/></div>
    <h6>HP: ${champion.currentHP}</h6>
    <div><img src="${champion.imgUrl}/></div>
    <button>${champion.attacks}
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
