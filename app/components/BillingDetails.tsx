import React from 'react'

const BillingDetails = () => {
  return (
    <section>
      <h4 className="font-semibold text-2xl mb-8">Pay Now!</h4>
      <h4 className="font-medium text-xl mb-4">Billing details</h4>
      <form action="" className="grid gap-8">
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
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="" className="mb-3 block">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div>
            <label htmlFor="" className="mb-3 block">
              Mobile Number
            </label>
            <label className="input input-bordered flex items-center gap-2">
              -94
              <input type="text" className="grow" placeholder="0 0000 00 00" />
            </label>
          </div>
          <div>
            <label htmlFor="" className="mb-3 block">
              Country
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
        </div>
      </form>
    </section>
  );
}

export default BillingDetails