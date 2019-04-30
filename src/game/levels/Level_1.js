import GameObject from "../../engine/gameObject/GameObject";
import { PrimitiveTypes } from "../../engine/renderer/Primitives";
import Input from "../../engine/input/Input";
import { createPlayer } from "../characters/player/Player";
import { createCrosshairs } from "../characters/player/Crosshairs";
import { createDummy } from "../characters/dummy/Dummy";
import { createWalls } from "./commons/Walls";

const player = createPlayer("player");
player.addChild(createCrosshairs("crosshairs"));
const walls = createWalls("walls");

let Level_1 = [
    player,
    walls
];

const levelManager = new GameObject( name );
levelManager.setComponent( "transform", { x: 0, y: 0, h: 0, w: 0 } );
setInterval(() => {
    const dummy = createDummy("dummy2", player);
    dummy.transform.y = Math.random() * 500;
    dummy.transform.x = Math.random() * 400;
    levelManager.addChild(dummy);
}, 500);

Level_1.push(levelManager);

export default Level_1;