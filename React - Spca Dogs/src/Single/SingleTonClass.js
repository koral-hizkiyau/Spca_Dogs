
class SingleTonClass{
    static dataBase = null;

    static createInstance(){
        var object = new SingleTonClass();
        return object
    }
    static saveDataBase = (db) =>{
        //if not init
        if(!SingleTonClass.instance){
            SingleTonClass.dataBase = SingleTonClass.createInstance();
        }
        SingleTonClass.dataBase = db;
    }

    static getDataBase(){
        return SingleTonClass.dataBase;
    }
}
export default SingleTonClass;