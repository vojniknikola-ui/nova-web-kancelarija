export interface Appointment {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  created_at?: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string;
  recaptchaToken: string;
}