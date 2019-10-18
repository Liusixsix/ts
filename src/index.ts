import './test'
const num:number = 123;
function fn(arg:number,arg2:any):void{

}
fn(num,[22])

interface IPerson{
    name:string,
    age:number,
    family:string[],
    sex?:'男'|'女'
}

const person:IPerson = {
    name:'小王',
    age:12,
    family:['我擦','卧槽']
}

type IPerson2 ={
    name:string,
    age:number
}

interface IArgs {
    name:string,
    age:string
}

function youFoo(arg1:string,arg2:'a'|'b',arg3:IArgs){

}

youFoo('sss','b',{name:'d',age:'2'})

console.log(333)