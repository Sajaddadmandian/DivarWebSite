const authService = require("./auth.service");
const autoBind = require("auto-bind");
class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  async sendOTP(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async chechkOTP(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
