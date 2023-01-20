import { Router } from "express";
import { UserController } from "../controllers/userController";

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
    this.router.get("/login", UserController.login);
  }

  postRoutes() {}

  patchRoutes() {}

  deleteRoutes() {}
}

export default new userRouter().router;
