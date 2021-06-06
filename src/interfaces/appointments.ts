import { CalendarInfo } from './calendar-info';
import { MentorInfo } from './mentor-info';

export type Appointments = {
  mentor: MentorInfo;
  calendar: CalendarInfo[];
};
