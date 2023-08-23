import { uuid } from "uuidv4";

const posts = [
    {
        id: uuid(),
        name_user: "maria",
        hours: new Date().getHours() + ":" + new Date().getMinutes(),
        data: new Date().getUTCDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(),
        mensage: "Hello World!"
    }
]

export default posts