// module alisa register
import "module-alias/register"
import moduleAlias from "module-alias"
import path from "path"
moduleAlias.addAliases({
  "@": path.resolve(__dirname, "./"),
})
// import es module
import { sysConfig } from "@/config"
import Koa from "koa"
import Router from "koa-router"
import cors from "@koa/cors"
import KoaBody from "koa-body"
import errorHandler from "@/middle/error_handler"
import KoaStatic from "koa-static"
import KoaLogger from "koa-logger"

const app: Koa = new Koa()
const router: Router = new Router()

// 需要数据库连接可选择接触该行注释
// import dbGenerator from "@/db/db_generator"
// dbGenerator()

// log
app.use(KoaLogger())

// 错误处理
app.use(errorHandler())

// 静态文件服务
app.use(
  KoaStatic(path.join(__dirname, "../static"), {
    gzip: true,
  })
)

// CORS
app.use(cors())

// 解析 HTTP Body
app.use(
  KoaBody({
    multipart: true,
    formidable: {
      maxFieldsSize: 2000 * 1024 * 1024,
    },
  })
)

// Router
import testRouter from "@/routers/test"
router.use("/api/test", testRouter.routes())

app.use(router.routes()).use(router.allowedMethods())

// Listen
app.listen(sysConfig.port)
console.log(`serve running on port ${sysConfig.port}`)
