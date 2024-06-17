import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   Update=(severity:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.put(Web() + '/severity' + `?jwt_token=${jwt_token}`, severity);
    }
   GetEntityById=(severityId:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web()+ '/severity/' + severityId + `?jwt_token=${jwt_token}`);
    }
}