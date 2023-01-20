import * as express from "express";

let app: express.Application = express();

app.use(function (req, res, next) {
  console.log("Called...");
  next();
});

app.listen(5000, () => {
  console.log("Server is running at port:5000");
});

app.get("/api/user/login", (req: any, res) => {
  const data = [{ firstName: "Bikash", lastName: "Shaw", mobile: 9096028231 }];
  res.status(200).send(data);
});
