import Loki from "lokijs";
import { Appointment } from "../models/appointment";

let db: Loki = new Loki('data.db');
const calender = db.addCollection('calender');

export function createAppointment(appointment: Appointment): Appointment | undefined {
    return calender.insert(appointment);
}

export function getCalender(): Appointment[] {
    return calender.find();
}
