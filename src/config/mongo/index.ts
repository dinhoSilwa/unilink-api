import mongoose from "mongoose";

export class MongoDBConnection{
  private static instance : MongoDBConnection;
  private constructor (){};

  public static getInstance(){
    if(!MongoDBConnection.instance){
      MongoDBConnection.instance = new MongoDBConnection();
    }
    return MongoDBConnection.instance
  }

  public async connect(uri : string) : Promise<void>{
    try{
      await mongoose.connect(uri);
      console.log("Connecting From mongoDb Atlas")
    }catch(error){
      console.error("Error to Connected", error)
    }
  }

  public async disconnected():Promise<void>{
    try{
      await mongoose.disconnect()
      console.log("Disconnect from Mongo Db Atlas")
    }catch(error){
      console.error("Erro to Disconnected")
    }
  }

  public getInstance() :typeof mongoose{
    return mongoose
  }



}


