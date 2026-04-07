// this is my app
import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import getRouter from "./routes/get.route.js";

const app = express();

app.use(express.json());

// routes declaration

app.use("/api/v1/users",userRouter);
app.use("/api/v1/post",postRouter);
app.use("/api/v1/update",postRouter);
app.use("/api/v1/delete",postRouter)

app.use("/api/v1/get",getRouter);

// example route:http://localhost:4000/api/v1/users/register


export default app;