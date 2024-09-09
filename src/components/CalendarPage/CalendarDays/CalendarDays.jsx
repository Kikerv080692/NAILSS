
import { useState } from "react";
import * as SC from './CalendarDays.styled'
import { CastomModal } from "../../Modal/CastomModal";
import { Form } from "../../Form/Form";

export const CalendarDays = ({ isCurrentDay, dayItem, isCurrentMonth}) => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
    ;
  };


  return (
    <SC.CellWrapper  isCurrentMonth={isCurrentMonth(dayItem)}>
      <div onClick={toggleModal}>
        {isCurrentDay(dayItem) ? (
          <SC.CurrentDay>{dayItem.format("D")}</SC.CurrentDay>
        ) : (
          dayItem.format("D")
        )}
      </div>
      {isOpenModal && (
         <CastomModal toggleModal={toggleModal}><Form toggleModal={toggleModal} days={dayItem.format('D')} month={dayItem.format('MMMM')}/></CastomModal>
      )}
    </SC.CellWrapper>
  );
};
