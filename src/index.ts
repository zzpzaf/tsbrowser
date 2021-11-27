import { capitalizeFirst } from './app/modules/myfunctions' ;

const container: HTMLElement | any = document.getElementById("app")

let myString: string = "typescript is awesome";
let mySalutation:string =  capitalizeFirst(myString) + "!, it is time to use it!"



let outputElenent:string = ` 
    <div class="tsbrdiv1">
        <p>
            <spam class="log-text1"> ${mySalutation} </spam>
        </p>    
    </div>    
    `
const showContent = (flushElement:string):void => {
    container.innerHTML += flushElement;
}

showContent(outputElenent);

