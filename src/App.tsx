import React, { useEffect } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Calendar from './components/Calendar/Calendar';

import { GlobalStyle } from './styles';
import DayCalendar from './components/DayCalendar/DayCalendar';
import { Appointments } from './interfaces/appointments';
import { handleRequest } from './utils/handle-request';
import { initAppointmentsList } from './store/appointments/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [mentor, setMentor] = useState<string>('');

  useEffect(() => {
    initCalendar();
  }, []);

  const initCalendar = async (): Promise<void> => {
    try {
      return await fetch(`${process.env.REACT_APP_API}`, {
        method: 'GET',
      })
        .then((res) => handleRequest(res))
        .then((list: Appointments) => {
          setMentor(list.mentor.name);
          dispatch(initAppointmentsList(list));
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={2}>
          <Calendar mentor={mentor} />
        </Grid>
        <Grid item xs={12} md={10}>
          <DayCalendar />
        </Grid>
      </Grid>

      <GlobalStyle />
    </div>
  );
};

export default App;
