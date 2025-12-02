/**
 * IMPORTANT NOTE - arrow functions cannot be used as a constructor in js as they lack the prototype property, which means the this binding won't work here.
 * Instead you have to use normal function definition to do the same operation
 */

//Getting the input data and printing
const fs = require('fs');

fs.readFile("01.txt","utf-8", (err,data) => {
    const arr = data.split("\n").map((row) => row.trim());
    console.log(arr);
    console.log(`Length - ${arr.length}`); // ES6 convention
    let il = arr.length;
    /*
    // Circular linked list implementation
    function circularLinkedList(){
        let Node = function(element){
            this.element = element;
            this.next = null;
            this.prev = null;
        }

        let length = 0;
        let head = null;

        //Get element at specific index
        this.getElementAt = function(index){
            if(index>=0 && index<=length){
                let node = head;
                for(let i =0;i<index && node!=null;i++){
                    node = node.next;
                }
                return node;
            }
            return undefined;
        }

        //Appending new node
        this.append = function(element){
            
            //Create new Node
            const node = new Node(element);
            let current;

            //If head is empty
            //Then make new node head

            if(head === null){
                head = node;
            }
            else{
                //Add the new node as the next node
                //Then mark the next of new node to head
                current = this.getElementAt(length-1);
                current.next = node;
            }

            node.next = head;
            length++;

        }
    }

    //Creating a dial starting from 0 to 99
    let cll = new circularLinkedList();
    for (let i=0;i<=99;i++){
        cll.append(i);
        console.log("Element at ",i,"th index is: ",i);
    }
    */
    let pos = 50;
    let count = 0;

    for(const move of arr){
        //console.log(`${i}th element is ${arr[i]}`);
        const dir = move[0];
        const steps = parseInt(move.substring(1),10);

        if(dir === "L"){
            pos = (pos-steps)%100;
            if(pos<0) {
                pos+=100;
            }
        }
        else if (dir === "R"){
            pos = (pos+steps)%100;
        }

        if(pos === 0){
            count++;
        }
    }  

    console.log(count);

})



