class Input {
    constructor() {
        this.initialized = false;
        this.Mouse = {};
        this.Keys = {};
        this.Actions = {};
        this.ActionMap = null;
    }

    init(canvasName, actionMap) {
        if(!this.initialized) {
            this.ActionMap = actionMap;

            window.onkeyup = e => this.keyPressed(e.key, false)
            
            window.onkeydown = e => this.keyPressed(e.key, true)
            
            let canvas = document.getElementById(canvasName);
            
            onmousemove = e => {
                if(canvas) {
                    let rect = canvas.getBoundingClientRect();
                    this.Mouse.x = e.clientX - rect.left;
                    this.Mouse.y = e.clientY - rect.top;
                }
            }

            onmouseup = e => {
                this.onMouseClicked(false);
            }

            onmousedown = e => {
                this.onMouseClicked(true);
            }

            this.initialized = true;
        }
    }

    onMouseClicked(state) {
        this.Actions[this.ActionMap["MouseDown"]] = state;
    }

    keyPressed(key, state) {
        this.Keys[key] = state;
        if(this.ActionMap)
            this.Actions[this.ActionMap[key]] = state;
    }
}

export default new Input();