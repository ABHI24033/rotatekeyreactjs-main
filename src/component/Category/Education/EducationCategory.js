import React from 'react'
import CommonSectionCategory from '../../../Shared/CommonSectionCategory';
import { categoryModel } from '../../../Model/categoryCons';


const EducationCategory = () => {
  return (
    <>
 <CommonSectionCategory props={categoryModel.Education}/>
    </>
  )
}

export default EducationCategory