let GENERATED_ID = 0;

class GameObject {
    constructor(name) {
        this.id = GENERATED_ID++;
        this.tags = [];
        this.name = name;
        this.parent = null;
        this.gameObjects = [];
        this.sprite = null;
        this.collider = null;
        this.rigidBody = null;
        this.rigidBody = null;
        this.toDestroy = false;
        this.transform = { x: 0, y: 0, w: 0, h: 0 }
        this._update = () => {}
        this.onCollision = col2 => {}
    }

    setComponent(componentName, component) {
        this[componentName] = component;
    }

    setUpdate(updateCallback) {
        this._update = updateCallback.bind(this);
    }

    setOnCreate(onCreateCallback) {
        this._onCreate = onCreateCallback.bind(this);
    }

    update(deltaTime) {
        this._update(deltaTime);
        this.gameObjects.forEach( obj => obj.update(deltaTime) );
    }

    setOnCollision(onCollisionCallback) {
        this.onCollision = onCollisionCallback.bind(this);
    }

    addChild(gameObject) {
        gameObject.parent = this;
        this.gameObjects.push(gameObject);
    }

    addTag(tag) {
        this.tags.push(tag);
    }

    hasTag(tag) {
        return !!this.tags.find(t => t === tag);
    }

    destroySelf() {
        this.toDestroy = true;
    }
}

export default GameObject;