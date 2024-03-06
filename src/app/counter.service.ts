
export class CounterService{
    toActiveCounter = 0;
    toInactiveCounter = 0;

    countToActive(){
        this.toActiveCounter++;
        console.log("to active: " + this.toActiveCounter);
    }

    countToInactive(){
        this.toInactiveCounter++;
        console.log("to inactive: " + this.toInactiveCounter);
    }
}