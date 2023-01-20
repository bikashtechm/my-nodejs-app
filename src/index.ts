import * as express from "express";
import * as mongoose from "mongoose";

let app: express.Application = express();

app.use(function (req, res, next) {
  console.log("Called...");
  next();
});

app.listen(5000, () => {
  console.log("Server is running at port:5000");
});

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://admin:admin@mongodb.f7h21rd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB is connected...");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/api/user/login", (req: any, res) => {
  const data = [{ firstName: "Bikash", lastName: "Shaw", mobile: 9096028231 }];
  res.status(200).send(data);
});

app.get("/api/user/signup", (req, res) => {
  res.status(200).send("Signup API called..");
});
