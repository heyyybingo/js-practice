import Koa from "koa";
import KoaStatic from "koa-static";
import bodyParser from "koa-bodyparser"

import rootRouter from "./router.js";
const app = new Koa();

app.use(bodyParser())
app.use(KoaStatic("app"))
app.use(rootRouter.routes());


app.listen(3000);
