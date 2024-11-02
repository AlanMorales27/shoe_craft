class ButtonManager{
    constructor(button){
        this.color = "#ffffff";
        this.button = button;
    }

    get getColor(){
        let color = getComputedStyle(this.button); 
        return color.backgroundColor;
    }

    onButtonclicked(){
        this.button.onclick = () => {
            console.log(this.getColor);
        }
    }
}

export default ButtonManager;