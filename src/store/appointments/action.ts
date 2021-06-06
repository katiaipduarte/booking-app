import moment from 'moment';
import { action, PayloadAction } from 'typesafe-actions';
import { Appointments } from '../../interfaces/appointments';
import { CalendarAppointment } from '../../interfaces/calendar-appointment';
import { MentorInfo } from '../../interfaces/mentor-info';
import { AppointmentsType } from './type';

export const initAppointmentsList = (
  appointments: Appointments,
): PayloadAction<string, { mentor: MentorInfo; calendar: CalendarAppointment[] }[]> => {
  const mappedData = {
    mentor: appointments.mentor,
    calendar: appointments.calendar.map((i) => {
      return {
        endDate: moment(i.date_time).add(1, 'hours'),
        startDate: moment(i.date_time),
        title: 'Booked',
      };
    }) as unknown as CalendarAppointment[],
  };

  return action(AppointmentsType.INIT, [mappedData]);
};

export const updateAppointmentsList = (appointment: CalendarAppointment): PayloadAction<string, CalendarAppointment> =>
  action(AppointmentsType.UPDATE, appointment);

export const updateCurrentDate = (date: Date): PayloadAction<string, Date> => action(AppointmentsType.NEW_DATE, date);
