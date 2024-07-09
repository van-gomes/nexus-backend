import { Params } from "express-serve-static-core";
import { Request } from "express";
  
  /* Mocar os parâmetros request e response que são passados na função createUser */
  export const makeMockRequest = (
    { params, query }: { params?: Params, query?: Params }): Request => {
        const request = {
            params: params || {},
            query: params || {}
        } as unknown;

        return request as Request;
    }