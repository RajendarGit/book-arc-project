import React from 'react'

const PaymentMethod = () => {
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
      <div className="card bg-grey-bg p-8 grid gap-8 mt-5">
        <div className="grid grid-cols-1">
          <label htmlFor="" className="mb-3 block">
            Country
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full input-bordered"
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div>
            <label htmlFor="" className="mb-3 block">
              First Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
          <div>
            <label htmlFor="" className="mb-3 block">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
        </div>
        <button className="btn btn-primary">Pay $59.35</button>
        <p className="text-grey">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>
    </section>
  );
}

export default PaymentMethod