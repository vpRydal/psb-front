import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import BookingStore from '@stores/booking';
import PassengerStore from '@stores/passenger';

import './Info.module.scss';

interface IProps {}
const Info: FC<IProps> = () => {
  const booking = useInjection(BookingStore);
  function handleAdd() {
    booking.addPassenger();
  }

  function renderForm(passenger: PassengerStore, index: number) {
    return (
      <form>
        <h3>
          passenger number №
          {index + 1}
        </h3>
        <div>
          <label htmlFor="date">birthDate</label>
          <input
            type="date"
            id="date"
            value={passenger.formData.birthDate}
            onChange={(e) => passenger.formData.birthDate = e.target.value}
          />
        </div>
        <div>
          <label htmlFor="">type</label>
          <input type="text" value={passenger.formData.type} onChange={(e) => passenger.formData.type = e.target.value} />
        </div>
        <div>
          <label htmlFor="">name</label>
          <input type="text" value={passenger.formData.name} onChange={(e) => passenger.formData.name = e.target.value} />
        </div>
      </form>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        {booking.info.join(', ')}
      </div>
      <div>
        <button onClick={handleAdd} type="button">
          Добавить
        </button>
      </div>
      {booking.passengers.map(renderForm)}
    </div>
  );
};

export default observer(Info);
