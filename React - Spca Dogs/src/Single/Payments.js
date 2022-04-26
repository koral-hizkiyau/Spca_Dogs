
class Payments{
    static dataBase = null;

    static createInstance(){
        var object = new Payments();
        return object
    }
    static saveDataBase = (db) =>{
        //if not init
        if(!Payments.instance){
            Payments.dataBase = Payments.createInstance();
        }
        Payments.dataBase = db;
    }

    static getDataBase(){
        return Payments.dataBase;
    }
}
export default Payments;