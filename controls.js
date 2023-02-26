class Controls{

    constructor(){

        // all controls false initially 
        this.forword = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        // keybord listners 
        //# - coz it is private method 
        this.#addKeyboardListners();

    }

    #addKeyboardListners(){
        document.onkeydown=(event)=>{

            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break ;

                    case "ArrowRight": 
                    this.right = true;
                    break;

                    case "ArrowUp":
                        this.forword = true;
                        break;
                       
                    case "ArrowDown":
                        this.reverse = true;
                        break;    
            }
           
            } 
            //  console.table(this);
    

        document.onkeyup=(event)=>{
            switch(event.key){

                case "ArrowLeft":
                    this.left = false;
                    break ;

                    case "ArrowRight": 
                    this.right = false;
                    break;

                    case "ArrowUp":
                        this.forword = false;
                        break;
                       
                    case "ArrowDown":
                        this.reverse = false;
                        break;    
           
                
            } 
            
        }
    }
}