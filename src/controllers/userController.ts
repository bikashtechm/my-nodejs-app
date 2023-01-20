import User from "../models/user";

export class UserController {
  static login(req, res, next) {
    const email = req.body.email;
    const pass = req.body.password;

    const user = new User({
      email: email,
      password: pass,
    });

    user
      .save()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        next(err);
      });
  }
}
