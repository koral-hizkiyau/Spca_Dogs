
class Sum{
    static dataBase = null;

    static createInstance(){
        var object = new Sum();
        return object
    }
    static saveDataBase = (db) =>{
        //if not init
        if(!Sum.instance){
            Sum.dataBase = Sum.createInstance();
        }
        Sum.dataBase = db;
    }

    static getDataBase(){
        return Sum.dataBase;
    }
}
export default Sum;