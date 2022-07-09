class Queue{
    constructor(size){
        this.data = [];
        this.rear = 0;
        this.size = size;
    }

    enqueue(element){
        if(this.rear<this.size){
            this.data[this.rear] = element;
            this.rear += 1;
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            this.rear -= 1;
            return this.data.shift();
        }
    }
    length(){
        return this.rear;
    }

    isEmpty(){
        return this.rear === 0;
    }

    getFront(){
        if(this.isEmpty()===False){
            return this.data[0];
        }
    }

    getLast(){
        if(!this.isEmpty()){
            return this.data[this.rear-1];
        }
    }

    print(){
        for(let i=0; i<this.rear; i++){
            console.log(this.data[i]);
        }
    }

    clear(){
        this.data.length = 0;
        this.rear = 0;
    }
}

export default Queue;