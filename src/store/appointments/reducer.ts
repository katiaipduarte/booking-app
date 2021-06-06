import moment from 'moment';
import { Reducer } from 'redux';
import { AppointmentsStore, AppointmentsType, APPOINTMENTS_INITIAL_STATE } from './type';

type AppointmentReducer = {
  type: string;
  payload?: any;
};

const appointmentReducer: Reducer<AppointmentsStore> = (
  state: AppointmentsStore = APPOINTMENTS_INITIAL_STATE,
  action: AppointmentReducer,
) => {
  switch (action.type) {
    case AppointmentsType.INIT:
      return {
        ...state,
        appointments: action.payload,
      };
    case AppointmentsType.UPDATE:
      //in the future needs to filter by mentor and then update the calendar
      const updated = state.appointments.map((i) => {
        return {
          mentor: i.mentor,
          calendar: [...i.calendar, action.payload],
        };
      });

      return {
        ...state,
        appointments: updated,
      };
    case AppointmentsType.NEW_DATE:
      return {
        ...state,
        currentDate: moment(action.payload).format('YYYY-MM-DD'),
      };
    default:
      return { ...state };
  }
};

export default appointmentReducer;
