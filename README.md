# Koa & Typescript 项目模板

项目徽章：[![Badge](https://img.shields.io/badge/TPL-koa--template--ts-blue)](https://github.com/EsunR/koa-template-ts)

## 模板已支持

- koa
- koa-router
- koa-static 静态目录访问
- 使用 sequelize 管理数据库（选择性启用）
- koa-cors CORS 跨域资源共享，默认无限制
- 开启 G-zip 压缩
- 控制台日志
- 错误的集中处理方案 [实现方案](https://blog.esunr.xyz/2019/11/koa%E7%9A%84%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E6%96%B9%E6%A1%88/)
- 集成 Prettier 与 ESLint 代码检查规则
- 集成 module-alias

## 模板设计

目录结构如下：

```
+ src
  + db         // 数据库层链接逻辑
  + middle     // 项目中自行封装的中间件
  + model      // 项目的 Model 层
  + routers    // 路由分层中的路由层
  + struct     // 自定义的结构体
  + controller // 项目中的 Controller 层
  + utils 
  - config.ts  // 系统配置
  - serve.ts   // 入口文件
+ static       // 静态资源访问目录
```

实现参考：

- [QiniuManager 第三方七牛云上传管理器](https://github.com/EsunR/QiniuManager)
- [DormitoryManagement 基于Vue的宿舍管理系统（ES6实现）](https://github.com/EsunR/DormitoryManagement)
- [引用文献格式生成工具](https://github.com/EsunR/ReferenceFormatGenerator)

## 运行

> 请使用 yarn 进行安装

安装依赖：

```sh
$ yarn
```

开发模式：

```sh
$ yarn dev
```

编译为 Javascript：

```sh
$ yarn build
```

## 部署

推荐使用 pm2 管理项目，项目已内置 `ecosystem` 脚本，直接调用 pm2 执行该脚本即可（会使用 ts-node 运行项目，因此不需要编译为 js）：

```sh
# 全局安装 pm2
npm install pm2 -g
# 使用 pm2 运行应用
pm2 start ./ecosystem.config.js
```