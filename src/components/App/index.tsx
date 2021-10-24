import Modal from 'components/Modal';
import React, { ChangeEvent, FC, useState } from 'react';
import Button from 'ui/Button';
import Checkbox from 'ui/Checkbox';
import Input from 'ui/Input';
import TextButton from 'ui/TextButton';

import * as ST from './styled';

export type TAppProps = {}

const App: FC<TAppProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [salary, setSalary] = useState<string>('');
  const [payments, setPayments] = useState<number[] | null>(null);

  const getYearTaxDeduction = (salary: number, apartmentCost?: number): number[] => {

    let deductionLimit = apartmentCost && apartmentCost <= 2000000 ? apartmentCost * 0.13 : 260000;

    let payment = salary * 12 * 0.13;
    const payments = [];
    while (deductionLimit > payment) {
      deductionLimit -= payment;
      payments.push(payment);
    }
    payments.push(deductionLimit);

    return payments;
  };

  const getPaymentsListEl = (payments: number[]) => {
    return (
      <>
        <ST.PaymentsTitle>Итого можете внести в качестве досрочных:</ST.PaymentsTitle>
        <ST.PaymentsList>
          {payments.map((payment, index) => {
            return (
              <ST.PaymentsItem>
                <Checkbox
                  payment={payment}
                  index={index}/>
              </ST.PaymentsItem>
            );
          })}
        </ST.PaymentsList>
      </>
    );
  };

  return (
    <ST.App>
      {showModal ?
        <Modal
          showModal={showModal}
          container={document.getElementById('root')!}
          closeModal={() => setShowModal(false)}
        >
          <ST.Title>Налоговый вычет</ST.Title>
          <ST.Subtitle>
            Используйте налоговый вычет чтобы погасить ипотеку досрочно.
            Размер налогового вычета составляет не более 13% от своего официального годового дохода.
          </ST.Subtitle>

          <ST.InputWrapper>
            <Input
              title={'Ваша зарплата в месяц '}
              onChange={(e: ChangeEvent) => setSalary(() => {
                const target = e.target as HTMLInputElement;
                return target.value;
              })}
            />
          </ST.InputWrapper>

          <TextButton text={'Рассчитать'} onClick={() => setPayments(getYearTaxDeduction(+salary))}/>

          {payments && getPaymentsListEl(payments)}

          <ST.PaymentsSettings>
            <ST.SettingsTitle>Что уменьшаем?</ST.SettingsTitle>
            <Button padding={'6px 12px'}>Платеж</Button>
            <Button padding={'6px 12px'}>Срок</Button>
          </ST.PaymentsSettings>
        </Modal>
        :
        <ST.ButtonWrapper>
          <Button
            width={'198px'}
            height={'56px'}
            onClick={() => setShowModal(true)}>Налоговый вычет</Button>
        </ST.ButtonWrapper>
      }
    </ST.App>
  );
};

export default App;
