import GameObject from "../../../engine/gameObject/GameObject";
import { PrimitiveTypes } from "../../../engine/renderer/Primitives";
import VectorUtils from "../../../engine/vector/utils";

function onCollision(collidedObj, deltaTime) {
    if(collidedObj.hasTag("bullet")) {
        this.sprite.primitiveColor = "#FFFFFF";
        setTimeout(() => {
            this.destroySelf();
        }, 50);
    }
}

export function createDummy(name, player) {
    const dummy = new GameObject( name );
    dummy.moveSpeed = 250;
    dummy.playerRef = player;
    dummy.setComponent("transform", { x: 150, y: 150, h: 20, w: 20 });
    dummy.setComponent("collider", { h: 20, w: 20, solid: true });
    dummy.setComponent("sprite", { primitive: true, primitiveType: PrimitiveTypes.Square, primitiveColor: "#8e2727" });
    dummy.setComponent("rigidBody", { velocity: { x: 0, y: 0 } });
    dummy.setUpdate(function(deltaTime) {
        const direction = VectorUtils.unit({
            x: (this.playerRef.transform.x - this.transform.x),
            y: (this.playerRef.transform.y - this.transform.y)
        });
        this.rigidBody.velocity = { x: direction.x * dummy.moveSpeed, y: direction.y * dummy.moveSpeed }
    })
    dummy.setOnCollision( onCollision );
    dummy.addTag("enemy");
    return dummy;
}