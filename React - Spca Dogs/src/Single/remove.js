
class remove{
    static dataBase = null;

    static createInstance(){
        var object = new remove();
        return object
    }
    static saveDataBase = (db) =>{
        //if not init
        if(!remove.instance){
            remove.dataBase = remove.createInstance();
        }
        remove.dataBase = db;
    }

    static getDataBase(){
        return remove.dataBase;
    }
}
export default remove;