import { uuid } from "uuidv4";
import posts from "../database/posts.js";

class Client {
    constructor(){}

    get(_req, res){
        return res.status(200).json(posts)
    }
    
    post(req, res){
        posts.push({
            id: uuid(),
            name_user: req.body.name_user,
            hours: new Date().getHours() + ":" + new Date().getMinutes(),
            data: new Date().getUTCDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(),
            mensage: req.body.mensage
        })
        return res.status(200).json({
            status: 200,
            mensage: "post criado com sucesso!"
        })
    }

    update(req, res){
        const { id, mensage } = req.body

        posts.map(post => {
            if(post.id === id){
                post.mensage = mensage
            }
        })

        return res.status(200).json({
            mensage: "Post Atualizado com Sucesso!"
        })
    }

    delete(req, res){
        const index = posts.findIndex(post => post.id === req.body.id);
        
        if (index !== -1) {
            posts.splice(index, 1)
            
            return res.status(200).json({
                mensage: "POST DELETADO COM SUCESSO!"
            })
        } else {
            return res.status(404).json({
                mensage: "POST NÃO ENCONTRADO!"
            })
        }
    }
}

export const routesClient = new Client()