import Dragon from "../../models/Dragon.js"
import Champion from "../../models/Champion.js"

export default class DragonService {
    constructor() {
    }
    getChamps(draw) {
        fetch('https://dragon-duel.herokuapp.com/api/champions')
            .then(res => res.json())
            .then(res => draw(res))
    }
}
