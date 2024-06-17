import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createticket.scss";
import  {service}   from './createticket.service';

class Createticket extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    tickets : {
    name: '',
    description: '',
    types: '',
    severity: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ tickets: { ...this.state.tickets, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.tickets.created_by = sessionStorage.getItem('email')||'{}';
    }
    entitytypesGetAllValues  () {
    this.test.entitytypesGetAllValues().then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    Create  () {
    this.test.Create(this.state.tickets).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    entityseverityGetAllValues  () {
    this.test.entityseverityGetAllValues().then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createticket</h2>
        <div>
    <div id="template-iwlp">
        <div id="it9a">
            <div id="template-ingv" className="gjs-row">
                <div id="template-i1lq" className="gjs-cell">
                    <label id="template-i32q">Name</label>
                    <input type="text" id="template-i2ve5" onChange={this.handlechange}
                    name="name" value={this.state.tickets.name}className="form-control " />
                </div>
                <div id="template-inqc" className="gjs-cell">
                    <label id="template-iommk">description</label>
                    <input type="text" id="template-innan" onChange={this.handlechange}
                    name="description" value={this.state.tickets.description}className="form-control "
                    />
                </div>
                <div id="template-i9j8" className="gjs-cell">
                    <label id="template-ickhg">callername</label>
                    <input type="text" id="template-icgqb" className="form-control "
                    />
                </div>
            </div>
            <div id="template-ih4w" className="gjs-row">
                <div id="template-ivm6" className="gjs-cell">
                    <label id="template-if83k">types</label>
                    <div id="template-it2ve">
                        <Select id="template-iukai" options={this.state.typesoptions} onChange={this.handlechange}
                        value={this.state.tickets.types}className="form-control "></Select>
                    </div>
                    <div type="button" id="template-iaj6c" onClick={()=>this.Create()} className="btn btn-primary "> createticket</div>
                </div>
                <div id="template-is26" className="gjs-cell">
                    <label id="template-iqa3d">severity</label>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Createticket;