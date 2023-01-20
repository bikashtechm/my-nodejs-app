export class UserController {
  static login(req, res, next) {
    const error = new Error("Username and Password Incorrect");
    next(error);
  }
}
