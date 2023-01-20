import { Router } from "express";

class userRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  getRoutes() {
    this.router.get("/login", (req, res) => {
      res.send("Login API called...");
    });
  }

  postRoutes() {}

  patchRoutes() {}

  deleteRoutes() {}
}

export default new userRouter().router;
