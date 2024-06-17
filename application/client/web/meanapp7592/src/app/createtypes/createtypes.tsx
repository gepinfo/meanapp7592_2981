import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createtypes.scss";
import  {service}   from './createtypes.service';

class Createtypes extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    types : {
    name: '',
    description: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ types: { ...this.state.types, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.types.created_by = sessionStorage.getItem('email')||'{}';
    }
    Create  () {
    this.test.Create(this.state.types).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createtypes</h2>
        <div>
    <div id="template-iptm">
        <div id="template-io94" className="gjs-row">
            <div id="template-i49g" className="gjs-cell">
                <label id="template-i52f">name
                    <br id="template-i5bff"></br>
                </label>
                <input type="text" id="template-i740u" onChange={this.handlechange} name="name"
                value={this.state.types.name}className="form-control " />
                <div type="button" id="template-invua" onClick={()=>this.Create()} className="btn btn-primary "> create</div>
            </div>
            <div id="template-i265" className="gjs-cell">
                <label id="template-i220z">description
                    <br id="template-iu5jr"></br>
                </label>
                <input type="text" id="template-ipbv2" onChange={this.handlechange} name="description"
                value={this.state.types.description}className="form-control " />
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Createtypes;