import { call } from "three/webgpu";

class ButtonManager{
    constructor(button,callBack){
        this.color = "#ffffff";
        this.button = button;
        this.callBack = callBack;

        this.onButtonclicked();
    }

    get getColor(){
        let color = getComputedStyle(this.button); 
        return color.backgroundColor;
    }

    onButtonclicked(){
        let color = this.getColor;
        this.button.onclick = () => {
            console.log(this.getColor);
            this.callBack(color);
        }
    }
}

export default ButtonManager;