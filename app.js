import { input } from './Input.js';


class Network {
    constructor(arr){
        this.arr = arr;
    }
    checkNetwork(i, x, arr, node = this.arr[x].split(" ").slice(1)){

        // const ar = arr.filter(e => e === node[0] || node[1]);
        // console.log(ar)
        // for(const [key, value] of Object.entries(arr)){
        //     if(value === node[0] || node[1]){

        //     }
        // }
    
        if(i > arr.length - 1) {
            console.log('false');
            return;
        };

        // if(arr.includes(node[0],node[1])) console.log('true');

        if(arr[i].some(e => e === node[0]) && arr[i].some(e => e === node[1]) 
            ||
           [...arr[i][1], arr[i+1][0]]?.some(e => e === node[0]) && [...arr[i][1], arr[i+1][0]]?.some(e => e === node[1])
            ) {
                console.log('true');
                return;
            }
        // if(arr[i].includes(node[0])) console.log('true')
        // if(arr[i] === node[0] || arr[]) console.log('true')
        // console.log(node)
        // if(arr[i].includes(...node[0]) && arr[i].includes(...node[1])) result = true;
        // else result = false;
        return this.checkNetwork(++i, x, arr)

        // console.log(`Węzeł ${this.arr[x].slice(2)} nie jest podłączony do sieci światłowodowej`);
    }
    method1(){
        let arr = [];
        const method2 = (x) => {
            if(x > this.arr.length - 1) return arr;
            this.arr[x].includes('B')
                ? arr = [...arr, this.arr[x].split(" ").slice(1)]
                : this.checkNetwork(0, x, arr);
            return method2(++x)
        }
        return method2(0);
    }
}

const net = new Network(input);
console.log(net.method1());





// method(){
//     this.arr  = this.arr.map(e => e.split(" "));
//     return this.arr;
// }




