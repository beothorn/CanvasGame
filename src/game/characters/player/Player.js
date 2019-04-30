import GameObject from "../../../engine/gameObject/GameObject";
import { PrimitiveTypes } from "../../../engine/renderer/Primitives";
import Input from "../../../engine/input/Input";

function update(deltaTime) {
    const speed = 300;
    this.rigidBody.velocity = { x: 0, y: 0 }
    if(Input.Actions["MoveLeft"])
        this.rigidBody.velocity = { x: -1 * speed, y: this.rigidBody.velocity.y }
    if(Input.Actions["MoveRight"])
        this.rigidBody.velocity = { x: speed, y: this.rigidBody.velocity.y }
    if(Input.Actions["MoveDown"])
        this.rigidBody.velocity = { x: this.rigidBody.velocity.x, y: speed }
    if(Input.Actions["MoveUp"])
        this.rigidBody.velocity = { x: this.rigidBody.velocity.x, y: -1 * speed }
}

function onCollision(collidedObj, deltaTime) {
}

export function createPlayer(name) {
    const player = new GameObject( name );
    player.setComponent( "transform", { x: 500, y: 100, h: 20, w: 20 } );
    player.setComponent( "collider", { h: 20, w: 20, solid: true } );
    player.setComponent( "sprite", { primitive: true, primitiveType: PrimitiveTypes.Square, primitiveColor: "#42F4A1" } );
    player.setComponent( "rigidBody", { velocity: { x: 0, y: 0 } } );
    player.addTag("player");
    player.setOnCollision( onCollision );
    player.setUpdate( update );
    return player;
}