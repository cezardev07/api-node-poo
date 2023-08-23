import { App } from "./app/app.js";

const PORT = 3333

new App().serve.listen(PORT, () => {
    return console.log(`serve running http://localhost:${PORT}`)
})