import Router from "@koa/router";
import multer from "@koa/multer";

const upload=multer();
const rootRouter = new Router();





rootRouter.post("/form",upload.fields([
    {
      name: 'form-file',
      maxCount: 2
    }
  ]),(ctx)=>{
    console.log("body:",ctx.request.body)
    console.log("file",ctx.request.files);
    ctx.body = {};
})

export default rootRouter;
