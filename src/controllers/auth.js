import { uuid } from "uuidv4";
import users from "../database/users.js"

class Auth{

    constructor(){
        this.loginAdmin = this.loginAdmin.bind(this);
        this.loginClient = this.loginClient.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }
    
    loginAdmin(req, res){
        const { name, email, password } = req.body
        this.authenticate("admin", name, email, password, res)
    }
    
    loginClient(req, res){
        const { name, email, password } = req.body
        this.authenticate("client", name, email, password, res)
    }

    authenticate = (typeUser, name, email, password, res) => {
        if (name && email && password) {
            const authUser = users[typeUser].find(user => {
                return name === user.name && email === user.email && password === user.password
            })
            if (authUser) {
                return res.status(200).json(authUser)
            } else {
                return res.status(401).json({
                    message: "Credenciais inválidas"
                })
            }
        } else {
            return res.status(400).json({
                message: "Preencha todos os campos obrigatórios"
            })
        }
    }

    registerClient(req, res){
        const { name, email, password} = req.body

        if( name && email && password){
            users.client.push(
                {
                    id: uuid(),
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    data: new Date().getUTCDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(),
                    hours: new Date().getHours() + ":" + new Date().getMinutes(),
                }
            )
            return res.status(200).json({
                status: 200,
                mensage: "post criado com sucesso!"
            })
        }

        return res.status(401).json({
            status: 401,
            mensage: "Preencha todos os campos obrigatórios!"
        })
    }    
}

export const auth = new Auth()