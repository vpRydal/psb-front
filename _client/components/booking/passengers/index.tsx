import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import BookingStore from '@stores/booking';
import PassengerStore from '@stores/passenger';
import FormFieldContainer from '@ui/form-field-container';
import { InputsGrid } from '@ui/inputs-grid';

import * as Style from './style';

interface IProps {}
const Info: FC<IProps> = () => {
  const booking = useInjection(BookingStore);

  // HANDLERS
  function handleAdd() {
    booking.addPassenger();
  }

  function renderForm(passenger: PassengerStore, index: number) {
    const { name, type, birthDate } = passenger.form.fields;

    return (
      <form style={{ maxWidth: 500, display: 'block', margin: '0 auto' }}>
        <Style.Title>
          passenger number №
          {index + 1}
        </Style.Title>
        <InputsGrid colsDesktop={3}>
          <FormFieldContainer field={birthDate} label="birthDate">
            <input
              type="date"
              id="date"
              value={birthDate.value}
              onChange={e => birthDate.set(e.target.value)}
            />
          </FormFieldContainer>
          <FormFieldContainer field={type} label="type">
            <input type="text" value={type.value} onChange={e => type.set(e.target.value)} />
          </FormFieldContainer>
          <FormFieldContainer field={name} label="name">
            <input
              type="text"
              value={name.value}
              onChange={e => {
                name.set(e.target.value);
                name.validate();
              }}
            />
          </FormFieldContainer>
        </InputsGrid>
        <button onClick={() => passenger.form.validate()} type="button">
          Validate
        </button>
      </form>
    );
  }

  return (
    <Style.Wrapper>
      <Style.Info>
        {booking.info.join(', ')}
      </Style.Info>
      <div>
        <button onClick={handleAdd} type="button">
          Добавить
        </button>
      </div>
      {booking.passengers.map(renderForm)}
    </Style.Wrapper>
  );
};

export default observer(Info);
