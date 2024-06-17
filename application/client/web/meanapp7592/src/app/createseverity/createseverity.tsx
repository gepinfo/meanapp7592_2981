import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createseverity.scss";
import  {service}   from './createseverity.service';

class Createseverity extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    severity : {
    name: '',
    description: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ severity: { ...this.state.severity, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.severity.created_by = sessionStorage.getItem('email')||'{}';
    }
    Create  () {
    this.test.Create(this.state.severity).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createseverity</h2>
        <div>
    <div id="template-ips2" className="gjs-row">
        <div id="template-ixjh" className="gjs-cell">
            <label id="template-immu">Name</label>
            <input type="text" id="template-i48b" onChange={this.handlechange}
            name="name" value={this.state.severity.name}className="form-control " />
            <div type="button" id="template-im4ig" onClick={()=>this.Create()} className="btn btn-primary "> create</div>
        </div>
        <div id="template-ia9k" className="gjs-cell">
            <label id="template-i4rw">Description</label>
            <input type="text" id="template-inmc" onChange={this.handlechange}
            name="description" value={this.state.severity.description}className="form-control "
            />
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Createseverity;