// import React from 'react'
import axios from 'axios'
import { localUrl } from '../../env';

const FacebookLogin = (accessToken) => {
    axios.post(localUrl + 'user/facebook/',{
        token: accessToken,
        backend: 'facebook',
        grant_type: 'convert_token',
        client_id: 'ZA1uTFZtGLnUe8PhVktOyIS4yG8lwi1O6gxjcoyP',
        client_secret: 'icOdKuJ19GLJMZrGzIAKAMJyQeIRCI5OsUiloJiHFGnQCPdxt8gc8jaIa9o9dQyU8o2VGz05xyYZzsdGblNFHvkcWBNgWMlBw6OEOkLk7i8AncerpDLWWho7cI3wpY1f'
    })
    .then((res)=> {
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);

    });
  
};

export default FacebookLogin