import Dragon from "../../models/Dragon.js"
import Champion from "../../models/Champion.js"

// @ts-ignore
const duelApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/',
    timeout: 3000
})


let activeChampId = ''
let activeDragonId = ''
let gameId = ''

export default class DragonService {
    constructor() {
    }
    getChamps(draw) {
        duelApi.get('champions')
            .then(res => {
                let champs = res.data.map(rawChamp => {
                    return new Champion(rawChamp)
                })
                draw(champs)
            })
    }
    getDrags(draw) {
        duelApi.get('dragons')
            .then(res => {
                let drags = res.data.map(rawDrag => {
                    return new Dragon(rawDrag)
                })
                draw(drags)
            })
    }
    setActiveChamp(championId) {
        activeChampId = championId
    }
    setActiveDragon(dragonId) {
        activeDragonId = dragonId
    }
    startGame() {
        if (typeof activeChampId == 'number' && typeof activeDragonId == 'number') {
            let gameObj = {
                dragonId: activeDragonId,
                championId: activeChampId
            }
            duelApi.post('game', gameObj)
                .then(res => {
                    console.log(res)
                    gameId = res.data.game._id
                })
        }
        else {
            alert('PLEASE SELECT BOTH A DRAGON AND CHAMPION! THIS IS NO GAME!!!')
        }
    }

    attack(attackStr) {
        duelApi.put('game/' + gameId, { attack: attackStr })
    }
}
