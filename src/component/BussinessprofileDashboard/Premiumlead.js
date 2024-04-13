import React, { useState } from 'react';
import './Leads.css';
import { Checkbox } from 'antd';

const PremiumLead =()=> {


  const [tableData, setTableData] = useState([
    {
      id: 1,
      adstitle: 'Toyota Camry ',
      views: 100,
      applications: 45,
      createdon: '01-07-2023',
      expirydate: '01-02-2023',
      isChecked: false
    },
    {
      id: 2,
      adstitle: 'Honda Accord',
      views: 68,
      applications: 17,
      createdon: '01-07-2023',
      expirydate: '01-02-2023',
      isChecked: false
    },
    {
      id: 3,
      adstitle: 'Ford F-150 XL',
      views: 54,
      applications: 14,
      createdon: '01-07-2023',
      expirydate: '01-02-2023',
      isChecked: false
    },
    {
      id: 4,
      adstitle: 'Yamaha Mt-15',
      views: 654,
      applications: 28,
      createdon: '01-07-2023',
      expirydate: '01-02-2023',
      isChecked: false
    },
    {
      id: 5,
      adstitle: 'Cruzer xl',
      views: 370,
      applications: 78,
      createdon: '01-07-2023',
      expirydate: '01-02-2023',
      isChecked: false
    },
    {
      id: 6,
      adstitle: 'Ford ',
      views: 357,
      applications: 15,
      createdon: '01-07-2023',
      expirydate: '01-02-2023',
      isChecked: false
    },
  ]);


  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    }
  };

  const handleDownload = () => {
    const filename = 'table_data.csv';
    const rows = [['Ads Title', 'Views', 'Applications', "Created On", "Expiry Date"], ...tableData.filter(item => selectedRows.includes(item.id)).map(item => [item.adstitle, item.views, item.applications, item.createdon, item.expirydate,])];
    const csvContent = "data:text/csv;charset=utf-8," + rows.map(row => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <h5 style={{fontFamily: 'Arial'}}><ins>Premium Leads Details :</ins></h5>
    <div className="container1">
      <table className="table1" >
        <thead>
          <tr>
            <th className='text-black'>Select</th>
            <th className='text-black'>Ads Title</th>
            <th className='text-black'> Views</th>
            <th className='text-black'>Applications</th>
            <th className='text-black'>Created On</th>
            <th className='text-black'>Expiry Date</th>
          </tr>
        </thead>
        <tbody className="table1-body">
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>
                <Checkbox type="checkbox" checked={selectedRows.includes(item.id)} onChange={(event) => handleCheckboxChange(event, item.id)} />
              </td>
              <td className='text-black'>{item.adstitle}</td>
              <td className='text-black'>{item.views}</td>
              <td className='text-black'>{item.applications}</td>
              <td className='text-black'>{item.createdon}</td>
              <td className='text-black'>{item.expirydate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <center>
      <button className="btnhead" onClick={handleDownload}>Download</button>
      </center>
    </>
  );
}

export default PremiumLead;