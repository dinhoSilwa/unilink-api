import { Request, Response } from "express";
import { UserServices } from "../../service/User";

export class UserController {

  static async getUserData(req :  Request, res :Response):Promise<void>{
    try{
      const {id} = req.body;
      if(!id){
        res.status(500).json({msg : "Falha ao obter Id"})
      }

      const user = await UserServices.getUser(id)
      res.status(200).json(user)
    }catch(error){
      console.error("Falha ao obter Dados", error)
    }
  }

  static async createAvatar(req: Request, res: Response): Promise<void> {
    try {
      const { userEmail } = req.body;
      if (!userEmail) {
        res.status(400).json({ msg: "Forneça o email" });
        return;
      }

      if (!req.file) {
        res.status(400).json({ msg: "Forneça a imagem" });
        return;
      }

      const avatar = await UserServices.addAvtar(userEmail, req.file);
      res.status(201).json(avatar);
    } catch (error) {
      console.error("Falha ", error);
      res.status(500).json({ msg: "Erro ao Criar Avatar" });
    }
  }


}
