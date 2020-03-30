import { sysConfig } from "./config"
import Koa from "koa"
import Router from "koa-router"
import cors from "@koa/cors"
import KoaBody from "koa-body"
import errorHandler from "./middle/error_handler"
import dbGenerator from "./db/db_generator"
import koaStatic from "koa-static"
import path from "path"
import koaCompress from "koa-compress"

const app: Koa = new Koa()
const router: Router = new Router()

// Database
dbGenerator()

// Middle Wear
app.use(errorHandler())
app.use(cors())
app.use(koaCompress({ threshold: 2048 }))
app.use(
  koaStatic(path.join(__dirname, "../static"), {
    gzip: true
  })
)
app.use(
  KoaBody({
    multipart: true,
    formidable: {
      maxFieldsSize: 2000 * 1024 * 1024
    }
  })
)

// Router
router.get("/api/test", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "api serve is ok!"
  await next()
})
app.use(router.routes()).use(router.allowedMethods())

// Listen
app.listen(sysConfig.port)
console.log(`serve running on port ${sysConfig.port}`)
