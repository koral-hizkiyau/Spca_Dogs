
class Count{
    static dataBase = null;

    static createInstance(){
        var object = new Count();
        return object
    }
    static saveDataBase = (db) =>{
        //if not init
        if(!Count.instance){
            Count.dataBase = Count.createInstance();
        }
        Count.dataBase = db;
    }

    static getDataBase(){
        return Count.dataBase;
    }
}
export default Count;