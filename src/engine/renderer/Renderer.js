import { PrimitiveTypes } from "./Primitives";

export default class Renderer {
    constructor(canvasName) {
        this.canvas = document.getElementById(canvasName);
        if(!this.canvas) {
            console.log("No canvas detected. Aborting.")
        } else {
            this.context = this.canvas.getContext("2d");
        }
    }

    render(deltaTime, gameObjects) {
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        gameObjects.forEach(gameObject => {
            this.renderObj( gameObject );
        })
    }

    renderObj(gameObject) {
        const { sprite, transform } = gameObject;
        if(sprite && sprite.primitive && sprite.primitiveType === PrimitiveTypes.Square) {
            this.context.fillStyle = sprite.primitiveColor;
            this.context.fillRect(transform.x, transform.y, transform.w, transform.h);
        }
        gameObject.gameObjects.forEach( child => this.renderObj(child) )
    }
}