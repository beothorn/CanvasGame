const module = vector => {
    return Math.sqrt(vector.x*vector.x+vector.y*vector.y);
}

const unit = vector => {
    const mod = module(vector);
    return {
        x: vector.x / mod,
        y: vector.y / mod
    }
}

export default {
    module,
    unit
}