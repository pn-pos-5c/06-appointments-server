export interface Appointment {
    id: number;
    startDate: string;
    endDate: string;
    location: string | undefined;
    description: string;
}
