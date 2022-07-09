import Node from './Node.js'

class LinkedList{
    constructor(){
        this.head = null
    }

    insertAtHead(val){
        let tempNode = new Node(val)
        tempNode.next = this.head
        this.head = tempNode
        return this 
    }

    isEmpty(){
        return this.head == null
    }

    

}