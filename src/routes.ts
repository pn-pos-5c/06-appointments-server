import express from "express";
import { addAppointment, getCalender } from "./controllers/appointment.controller";

export const appointmentRouter = express.Router();

appointmentRouter.post('/', addAppointment);
appointmentRouter.get('/', getCalender);
