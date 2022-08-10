import React, { FC } from "react";

import css from './Info.module.scss'
import PassengerStore from "@store/passenger";
import {observer} from "mobx-react-lite";
import {useInjection} from "inversify-react";
import BookingStore from "@store/booking";

interface IProps {

}
const Info: FC<IProps> = () => {
  const booking = useInjection(BookingStore);
  function handleAdd() {
    booking.addPassenger();
  }

  function renderForm(passenger: PassengerStore, index: number) {
    return (
      <form>
        <h3>passenger number № {index + 1}</h3>
        <div>
          <label htmlFor="">birthDate</label>
          <input type="date" value={passenger.formData.birthDate} onChange={e => passenger.formData.birthDate = e.target.value} />
        </div>
        <div>
          <label htmlFor="">type</label>
          <input type="text" value={passenger.formData.type} onChange={e => passenger.formData.type = e.target.value} />
        </div>
        <div>
          <label htmlFor="">name</label>
          <input type="text" value={passenger.formData.name} onChange={e => passenger.formData.name = e.target.value} />
        </div>
      </form>
    )
  }

  console.log(booking.info)

  return (
    <div className={css.wrapper}>
      <div style={{ marginBottom: 50 }}>
        {booking.info.join(', ')}
      </div>
      <div>
        <button onClick={handleAdd}>
          Добавить
        </button>
      </div>
      {
        booking.passengers.map(renderForm)
      }
    </div>
  )
}

export default observer(Info);
