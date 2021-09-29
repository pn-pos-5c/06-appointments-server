import { Request, Response } from "express";

export function addAppointment(req: Request, res: Response) {
    console.log('POST /api/calender');

    res.status(200).json('POST /api/calender');
}

export function getCalender(req: Request, res: Response) {
    console.log('GET /api/calender');

    res.status(200).json('GET /api/calender');
}
