import moment from 'moment';
import { CalendarAppointment } from '../../interfaces/calendar-appointment';
import { MentorInfo } from '../../interfaces/mentor-info';

export const AppointmentsType = {
  INIT: '@@APPOINTMENTS/INIT',
  UPDATE: '@@APPOINTMENTS/UDPATE',
  NEW_DATE: '@@APPOINTMENTS/NEW_DATE',
};

export type AppointmentsStore = {
  currentDate: string;
  appointments: { mentor: MentorInfo; calendar: CalendarAppointment[] }[];
};

export const APPOINTMENTS_INITIAL_STATE: AppointmentsStore = {
  currentDate: moment(new Date()).format('YYYY-MM-DD'),
  appointments: [],
};
