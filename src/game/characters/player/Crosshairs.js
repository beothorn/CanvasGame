import GameObject from "../../../engine/gameObject/GameObject";
import { PrimitiveTypes } from "../../../engine/renderer/Primitives";
import VectorUtils from "../../../engine/vector/utils";
import Input from "../../../engine/input/Input";

function createBullet(name, origin, target) {
    const bullet = new GameObject( name );
    bullet.speed = 2000;
    const direction = VectorUtils.unit({
        x: (target.transform.x - origin.transform.x),
        y: (target.transform.y - origin.transform.y)
    });
    bullet.setComponent( "transform", { x: origin.transform.x, y: origin.transform.y, h: 15, w: 15 } );
    bullet.setComponent( "sprite", { primitive: true, primitiveType: PrimitiveTypes.Square, primitiveColor: "#ffe399" } );
    bullet.setComponent( "rigidBody", { velocity: { x: direction.x * bullet.speed, y: direction.y * bullet.speed } } );
    bullet.setComponent("collider", { h: 15, w: 15, solid: false });
    bullet.setOnCollision(function(collidedObj, deltaTime) {
        if(!collidedObj.hasTag("player")) {
            bullet.destroySelf();
        }
    });
    bullet.addTag("bullet");
    setTimeout(() => { bullet.destroySelf() }, 600)
    return bullet;
}

export function createCrosshairs(name) {
    const crosshairs = new GameObject( name );
    crosshairs.setComponent( "transform", { x: 200, y: 200, h: 5, w: 5 } );
    crosshairs.setComponent( "sprite", { primitive: true, primitiveType: PrimitiveTypes.Square, primitiveColor: "#ffecba" } );
    crosshairs.setUpdate(function(deltaTime) {
        this.transform = { ...Input.Mouse, h: this.transform.h, w: this.transform.w };
        let player = this.parent;
        if(!this.isFiring && Input.Actions["Fire"]) {
            this.addChild(createBullet("bullet", player, this));
            this.isFiring = true;
            setTimeout(() => {
                this.isFiring = false;
            }, 100)
        }
    });
    return crosshairs;
}