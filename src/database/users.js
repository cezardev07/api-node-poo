import { uuid } from "uuidv4";

const users = {
    admin:[
        {
            id: uuid(),
            name: "admin",
            email: "admin@admin.com",
            password: "321"
        }
    ],
    client:[
        {
            id: uuid(),
            name: "maria",
            email: "maria@test.com",
            password: "123",
            data: new Date().getUTCDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(),
            hours: new Date().getHours() + ":" + new Date().getMinutes(),
        }
    ]
}

export default users