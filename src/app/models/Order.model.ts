import {Client} from "./client.modele";
import {ItemList} from "./itemList.modele";



export class Order {
  public id!:number;
  public client:Client={name:"",address:"",phoneNumber:"",email:"",username:""};
  public products:Array<ItemList>=[];
  public totalAmount!:number;
  public date!:Date;
}
