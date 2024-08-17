import moment from "moment";
import { useState } from "react";
import { CalendarMonitor } from "./CalendarMonitor/CalendarMonitor";
import { CalendarGrid } from "./CalendarGrid/CalendarGrid";
import * as SC from './CalendarPage.styled'
import Button from "../Button/Button";
import 'moment/locale/uk'
import { useTranslation } from 'react-i18next';


export const CalendarPage = () => {
  const { t } = useTranslation();
  moment.locale('uk')
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  
  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };

  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };
  const todayHandler = () => {
    setToday(moment());
  };

  return (
    <>
     <SC.ButtonBox>
        <Button>{t('buttonSchedule')}</Button>
      </SC.ButtonBox>
    <SC.WrapperAllCalendar>
      <CalendarMonitor
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        todayHandler={todayHandler}
        today={today}
      />
      <CalendarGrid startDay={startDay} today={today} />
    </SC.WrapperAllCalendar>
    
    </>
  );
};
