import React, { useEffect, useState } from 'react';
import { paymentMethodSchema } from '../validation/paymentMethodSchema';
import { PaymentMethodFormErrors } from '../types';
import CountrySelection from './shared/CountrySelection';
import { setTimeout } from 'timers';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../features/cartSlice';

type CountryOption = {
    value: string;
    label: string;
  };

const PaymentMethod: React.FC = () => {
  const [errors, setErrors] = useState<Partial<PaymentMethodFormErrors>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{ value: string; label: string } | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const totalPrice = useSelector(selectCartTotal);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.target as HTMLFormElement);
    const values: PaymentMethodFormErrors = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      country: selectedCountry?.value || '',
    };

    try {
      paymentMethodSchema.parse(values);
      setIsSuccess(true);

      (e.target as HTMLFormElement).reset();
      setSelectedCountry(null);

      setTimeout(() => {
        setIsSuccess(false);
      }, 2000)
    } catch (err: any) {
      setErrors(err.errors.reduce((acc: Partial<PaymentMethodFormErrors>, curr: any) => ({
        ...acc,
        [curr.path[0]]: curr.message,
      }), {}));
    }
  };

  return (
    <section className="mt-10 xl:mt-20">
      <h4 className="font-medium text-xl mb-4">Payment method</h4>
      <div className="flex gap-2">
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              defaultChecked
            />
            <span className="label-text">Card</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
            />
            <span className="label-text">Bank</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
            />
            <span className="label-text">Transfer</span>
          </label>
        </div>
      </div>
      <div className="card bg-grey-bg p-8 mt-5">
        <form onSubmit={handleSubmit} className="grid gap-8">
          <div className="grid grid-cols-1">
            {isMounted && <CountrySelection
              value={selectedCountry}
              onChange={(newValue) => setSelectedCountry(newValue)}
            />}
            {errors.country && <p className="text-error">{errors.country}</p>}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="mb-3 block">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="Type here"
                className="input w-full input-bordered"
              />
              {errors.firstName && (
                <p className="text-error">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="mb-3 block">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Type here"
                className="input w-full input-bordered"
              />
              {errors.lastName && (
                <p className="text-error">{errors.lastName}</p>
              )}
            </div>
          </div>
          {isSuccess && <p className="text-green-dark">Data successfully saved</p>}
          <button className="btn btn-primary">Pay ${totalPrice.toFixed(2)}</button>
        </form>
      </div>
    </section>
  );
};

export default PaymentMethod;