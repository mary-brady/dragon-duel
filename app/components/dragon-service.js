import Dragon from "../../models/Dragon.js"
import Champion from "../../models/Champion.js"

// @ts-ignore
const dragsApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/dragons',
    timeout: 3000
})

// @ts-ignore
const champsApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/champions',
    timeout: 3000
})

export default class DragonService {
    constructor() {
    }
    getChamps(draw) {
        champsApi.get()
            .then(res => {
                let champs = res.data.map(rawChamp => {
                    return new Champion(rawChamp)
                })
                draw(champs)
            })
    }
    getDrags(draw) {
        dragsApi.get()
            .then(res => {
                let drags = res.data.map(rawDrag => {
                    return new Dragon(rawDrag)
                })
                draw(drags)
            })
    }
}
