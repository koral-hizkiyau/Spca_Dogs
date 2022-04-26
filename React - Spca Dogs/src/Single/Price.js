
class Price{
    static dataBase = null;

    static createInstance(){
        var object = new Price();
        return object
    }
    static saveDataBase = (db) =>{
        //if not init
        if(!Price.instance){
            Price.dataBase = Price.createInstance();
        }
        Price.dataBase = db;
    }

    static getDataBase(){
        return Price.dataBase;
    }
}
export default Price;