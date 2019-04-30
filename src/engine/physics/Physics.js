import VectorUtils from "../vector/utils";

class Physics {
    run(deltaTime, gameObjects, oldTransforms) {
        this.moveRigidBodies( gameObjects, deltaTime );
        this.treatCollisions( deltaTime, gameObjects, oldTransforms );
    }

    moveRigidBodies(gameObjects, deltaTime) {
        gameObjects.forEach( gameObject => {
            this.moveRigidBody( gameObject, deltaTime );
        } );
    }
    
    moveRigidBody(gameObject, deltaTime) {
        if(gameObject.rigidBody) {
            gameObject.transform.x += gameObject.rigidBody.velocity.x * deltaTime;
            gameObject.transform.y += gameObject.rigidBody.velocity.y * deltaTime;
        }
        gameObject.gameObjects.forEach( child => this.moveRigidBody(child, deltaTime) );
    }

    treatCollisions(deltaTime, gameObjects, oldTransforms) {
        const toCancel = [];
        gameObjects.forEach( gameObject1 => this.treatGameObjectCollision( deltaTime, gameObjects, gameObject1, oldTransforms, toCancel ) );
        toCancel.forEach( t => cancelCollision( t.transform1, t.oldTransform1, t.collider1, t.transform2, t.collider2 ) );
    }

    treatGameObjectCollision(deltaTime, gameObjects, gameObject1, oldTransforms, toCancel) {
        if(gameObject1.collider) {
            gameObjects.forEach( gameObject2 => {
                this.treatSingleCollision(deltaTime, gameObject1, gameObject2, oldTransforms, toCancel);
                gameObject2.gameObjects.forEach(obj => this.treatSingleCollision(deltaTime, gameObject1, obj, oldTransforms, toCancel))
            } )
        }
        gameObject1.gameObjects.forEach(obj => this.treatGameObjectCollision(deltaTime, gameObjects, obj, oldTransforms, toCancel))
    }

    treatSingleCollision(deltaTime, gameObject1, gameObject2, oldTransforms, toCancel) {
        if(gameObject1.name !== gameObject2.name && gameObject2.collider) {
            const transform1 = gameObject1.transform;
            const transform2 = gameObject2.transform;
            const collider1 = gameObject1.collider;
            const collider2 = gameObject2.collider;
            if(isColliding( collider1, transform1, collider2, transform2 )) {
                gameObject1.onCollision( gameObject2, deltaTime );
                gameObject2.onCollision( gameObject1, deltaTime );
                if(collider1.solid && collider2.solid) {
                    const oldTransform1 = oldTransforms.find( t => t.id === gameObject1.id );
                    toCancel.push({
                        transform1,
                        oldTransform1,
                        collider1,
                        transform2,
                        collider2
                     });
                }
            }
        }
    }
}

const isColliding = (collider1, transform1, collider2, transform2) => 
    (
        (transform1.x > transform2.x && transform1.x < (transform2.x + collider2.w))
        ||
        ((transform1.x + collider1.w) > transform2.x && (transform1.x + collider1.w) < (transform2.x + collider2.w))
    )
    &&
    (
        (transform1.y > transform2.y && transform1.y < (transform2.y + collider2.h))
        ||
        ((transform1.y + collider1.h) > transform2.y && (transform1.y + collider1.h) < (transform2.y + collider2.h))
    )

const cancelCollision = (transform1, oldTransform1, collider1, transform2, collider2) => {
    const holdX = {...transform1, x: oldTransform1.x};
    const holdY = {...transform1, y: oldTransform1.y};
    if(isColliding(collider1, holdX, collider2, transform2)) {
        transform1.y = oldTransform1.y;
    } else if(isColliding(collider1, holdY, collider2, transform2)) {
        transform1.x = oldTransform1.x;
    }
}

export default Physics;