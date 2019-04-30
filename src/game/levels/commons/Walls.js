import GameObject from "../../../engine/gameObject/GameObject";
import { PrimitiveTypes } from "../../../engine/renderer/Primitives";

export function createWalls() {
    const wallRight = new GameObject( "wallRight" );
    wallRight.setComponent("transform", { x: 980, y: 0, h: 600, w: 20 });
    wallRight.setComponent("collider", { h: 980, w: 20, solid: true });
    wallRight.setComponent("sprite", { primitive: true, primitiveType: PrimitiveTypes.Square, primitiveColor: "#F4C242" });
    const wallLeft = new GameObject( "wallLeft" );
    wallLeft.setComponent("transform", { x: 0, y: 0, h: 980, w: 20 });
    wallLeft.setComponent("collider", { h: 600, w: 20, solid: true });
    wallLeft.setComponent("sprite", { primitive: true, primitiveType: PrimitiveTypes.Square, primitiveColor: "#F4C242" });
    const wallTop = new GameObject( "wallTop" );
    wallTop.setComponent("transform", { x: 20, y: 0, h: 20, w: 980 });
    wallTop.setComponent("collider", { h: 20, w: 980, solid: true });
    wallTop.setComponent("sprite", { primitive: true, primitiveType: PrimitiveTypes.Square, primitiveColor: "#F4C242" });
    const wallBottom = new GameObject( "wallBottom" );
    wallBottom.setComponent("transform", { x: 20, y: 580, h: 20, w: 960 });
    wallBottom.setComponent("collider", { h: 20, w: 960, solid: true });
    wallBottom.setComponent("sprite", { primitive: true, primitiveType: PrimitiveTypes.Square, primitiveColor: "#F4C242" });
    const walls = new GameObject("walls");
    walls.addChild(wallRight);
    walls.addChild(wallLeft);
    walls.addChild(wallTop);
    walls.addChild(wallBottom);
    return walls;
}