import React from 'react'
import CommonSectionCategory from '../../../Shared/CommonSectionCategory';
import { categoryModel } from '../../../Model/categoryCons';

const ServiceCategory = () => {
  return (
    <>
   <CommonSectionCategory props={categoryModel.Services}/>
    </>
  )
}

export default ServiceCategory