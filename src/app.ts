import cors from "cors";
import express from "express";
import { appointmentRouter } from "./routes";

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/calender', appointmentRouter);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})
