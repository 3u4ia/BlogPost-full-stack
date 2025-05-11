import { NextFunction, Request, Response  } from "express";

export const removePoweredByHeader = (req: Request, res: Response, next: NextFunction) => {
	res.removeHeader('X-Powered-By');
	next()
}