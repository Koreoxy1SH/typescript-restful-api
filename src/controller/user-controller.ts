import { Request, Response, NextFunction } from "express";
import {
  CreateUserRequest,
  LoginUserRequest,
  UpdateUserRequest,
} from "../model/user-model";
import { UserService } from "../service/user-service";
import { UserRequest } from "../type/user-request";

export class UserController {
  // USER CONTROLLER REGISTER
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateUserRequest = req.body as CreateUserRequest;
      const response = await UserService.register(request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  // USER CONTROLLER LOGIN
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const request: LoginUserRequest = req.body as LoginUserRequest;
      const response = await UserService.login(request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  // GET
  static async get(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const response = await UserService.get(req.user!);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  // UPDATE USER
  static async update(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: UpdateUserRequest = req.body as UpdateUserRequest;
      const response = await UserService.update(req.user!, request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}
