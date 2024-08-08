import React from 'react'
import Header from '../components/shared/Header';
import FilterSection from '../components/FilterSection';
import Wrapper from '../components/shared/Wrapper';
import ProductsCard from '../components/ProductsCard';

const Shop = () => {
  return (
    <Wrapper>
      <Header />
      <section className="md:flex md:flex-row md:gap-20">
        <div className='md:w-2/12'><FilterSection /></div>
        <div className='md:w-10/12'>
        sdhgdh
        </div>
      </section>
    </Wrapper>
  );
}

export default Shop