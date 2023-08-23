import posts from "../database/posts.js";

import users from "../database/users.js";

class Admin{
    constructor(){}

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

    deleteAll(req, res){
        const key = req.params.key
        const key_admin = users.admin[0].password
        
        if(key === key_admin){
            posts.splice(0, posts.length)
            return res.status(200).json({
                mensage: "TODOS OS POST FORAM DELETADOS COM SUCESSO!"
            })
        }

        return res.status(401).json({
            mensage: "key não autorizada"
        })
    }
}

export const routesAdmin = new Admin()