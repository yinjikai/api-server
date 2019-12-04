const Koa = require("koa");
const Router = require("koa-router");
const db = require("monk")("127.0.0.1/backyard");

const app = new Koa();
const router = new Router();

const users = db.get("users");

router.get("/", async (ctx, next) => {
    const data = await users.find({
        username: "jack",
        email: "1259559060@qq.com"
    });
    const res = {
        code: 200,
        data: data
    };
    ctx.body = res;
});

app.use(router.routes());

app.listen(8888);
