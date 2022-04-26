
class Deliver{
    static dataBase = null;

    static createInstance(){
        var object = new Deliver();
        return object
    }
    static saveDataBase = (db) =>{
        //if not init
        if(!Deliver.instance){
            Deliver.dataBase = Deliver.createInstance();
        }
        Deliver.dataBase = db;
    }

    static getDataBase(){
        return Deliver.dataBase;
    }
}
export default Deliver;