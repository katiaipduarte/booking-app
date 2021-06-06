import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  AppointmentModel,
  ChangeSet,
  EditingState,
  IntegratedEditing,
  ViewState,
} from '@devexpress/dx-react-scheduler';
import { CalendarAppointment } from '../../interfaces/calendar-appointment';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../store/store';

const DayCalendar = () => {
  const state = useSelector((state: GlobalState) => state.appointmentsState);
  const [appointments, setAppointments] = useState<CalendarAppointment[]>([]);

  useEffect(() => {
    if (state.appointments.length > 0) {
      setAppointments(state.appointments[0].calendar);
    }
  }, [state.appointments]);

  const updateAppointments = (e: ChangeSet) => {
    setAppointments([...appointments, e.added as CalendarAppointment]);
  };

  return (
    <Paper>
      <Scheduler data={appointments}>
        <ViewState currentDate={state.currentDate} />
        <EditingState onCommitChanges={(e) => updateAppointments(e)} />
        <IntegratedEditing />
        <DayView startDayHour={0} endDayHour={24} cellDuration={60} />
        <ConfirmationDialog />
        <Appointments />
        <AppointmentTooltip />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
};

export default DayCalendar;
