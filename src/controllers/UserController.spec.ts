import { UserService } from "../service/UserService";
import { UserController } from "./UserController";
import { Params } from "express-serve-static-core";
import { Request, Response } from "express";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {}

    const userController = new UserController(
        mockUserService as UserService
    );

    /* Mocar os parâmetros request e response que são passados na função createUser */
    const makeMockRequest = (
        { params, query }: { params?: Params, query?: Params }): Request => {
            const request = {
                params: params || {},
                query: params || {}
            } as unknown;

            return request as Request;
        }

    it('deve adicionar um novo usuário', () => {
        console.log(userController);

        const mockRequest = makeMockRequest({});

       const response = userController.createUser(mockRequest);
    })
});