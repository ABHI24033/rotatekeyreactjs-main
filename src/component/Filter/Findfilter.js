import React ,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import './Filter.css'

const Findfilter = () => {

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: option => option,
    });

    // Sample options for search box
 const myOptions = ['Real Estate', 'Furnitures', 'Cars',
	'Electronics', 'Jobs', 'Dropdown option teet',
'Hello text', 'Welcome to text field'];
    
  return (
    <div style={{ margin:'auto'}}>

	<Autocomplete style={{ width: 200  }} freeSolo filterOptions={filterOptions} options={myOptions}
		renderInput={(params) => (
	<TextField  name="category" {...params} label="Find Your Service Here"   />
	// <TextField {...params} variant="outlined" label="Search Box"/>

		)}
	/>
	</div>
  )
}

export default Findfilter