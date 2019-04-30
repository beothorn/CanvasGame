import Engine from "./src/engine/Engine";
import Level_1 from "./src/game/levels/Level_1";
import ActionMap from "./src/game/config/ActionMap";

const game = new Engine(
    "gamecanvas",
    ActionMap
);
game.loadLevel(Level_1);
game.run();