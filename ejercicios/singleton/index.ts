import Singleton from './Singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();

if(a === b){
    console.log("a === b"+true);
}