//draw champs n drags
//find a way to onclick = select one of each, submit to verify one of each b4 sending post
//post = create game
//put = attacks (updating)

import DragonController from "./app/components/dragon-controller.js"

class App {
    constructor() {
        this.controllers = {
            dragonCtrl: new DragonController
        }
    }
}

// @ts-ignore
window.app = new App()