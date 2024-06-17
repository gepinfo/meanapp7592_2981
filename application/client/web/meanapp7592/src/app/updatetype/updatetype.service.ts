import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   Update=(types:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.put(Web() + '/types' + `?jwt_token=${jwt_token}`, types);
    }
   GetEntityById=(typesId:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web()+ '/types/' + typesId + `?jwt_token=${jwt_token}`);
    }
}