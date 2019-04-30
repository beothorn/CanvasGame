import Input from "./input/Input";
import Renderer from "./renderer/Renderer";
import Physics from "./physics/Physics";

class Engine {
    constructor(canvasName, actionMap) {
        Input.init(canvasName, actionMap);
        this.renderer = new Renderer(canvasName);
        this.physics = new Physics();
        this.gameObjects = [];
    }

    loadLevel(level) {
        this.gameObjects = [];
        level.forEach(gameObject => this.gameObjects.push(gameObject));
    }

    update(deltaTime) {
        const oldTransforms = this.getOldTransforms(this.gameObjects);
        this.gameObjects.forEach(obj => obj.update(deltaTime));
        this.physics.run(deltaTime, this.gameObjects, oldTransforms);
        this.renderer.render(deltaTime, this.gameObjects);
        this.destroyGameObjectsIfNecessary(this.gameObjects);
    }

    getOldTransforms(gameObjs) {
        let ret = [];
        const oldTransforms = gameObjs.map(obj => ({ id: obj.id, ...obj.transform }));
        ret = [ ...oldTransforms ];
        const childTransforms = gameObjs.forEach(obj => {
            if(obj.gameObjects.length > 0)
                ret = [...ret, ...this.getOldTransforms(obj.gameObjects) ];
        });
        return ret;
    }

    destroyGameObjectsIfNecessary(objs) {
        objs.forEach(obj => {
            if(obj.toDestroy) {
                this.destroyGameObject(obj);
            } else {
                this.destroyGameObjectsIfNecessary(obj.gameObjects);
            }
        });
    }

    destroyGameObject(obj) {
        if(obj.parent) {
            obj.parent.gameObjects = obj.parent.gameObjects.filter(obj2 => obj2.id !== obj.id);
        } else {
            this.gameObjects = this.gameObjects.filter(obj2 => obj2.id !== obj.id);
        }
    }

    run() {
        this.lastUpdate = Date.now();
        setInterval(() => {
            let now = Date.now();
            let deltaTime = now - this.lastUpdate;
            this.lastUpdate = now;
            deltaTime = deltaTime / 1000;
            this.update(deltaTime);
        }, 0);
    }
}

export default Engine;