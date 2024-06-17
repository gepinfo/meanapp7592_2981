import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updateticket.scss";
import  {service}   from './updateticket.service';

class Updateticket extends React.Component<any, any> {
    queryId: any;
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
    entityseverityGetAllValues  () {
    this.test.entityseverityGetAllValues().then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    entitytypesGetAllValues  () {
    this.test.entitytypesGetAllValues().then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    Update  () {
    this.test.Update(this.state.tickets).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    GetEntityById  () {
    this.test.GetEntityById(this.queryId).then((data:any) => {
    this.setState({tickets:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">updateticket</h2>
        <div>
    <div id="template-ifxt" className="gjs-row">
        <div id="template-i81i" className="gjs-cell">
            <label id="template-iqhe">Name</label>
            <input type="text" id="template-ik86k" onChange={this.handlechange}
            name="name" value={this.state.tickets.name}className="form-control " />
        </div>
        <div id="template-ist1" className="gjs-cell">
            <label id="template-im4b9">description</label>
            <input type="text" id="template-ifqnb" onChange={this.handlechange}
            name="description" value={this.state.tickets.description}className="form-control "
            />
        </div>
        <div id="template-ielq" className="gjs-cell">
            <label id="template-iu0zh">callername</label>
            <input type="text" id="template-id0zg" className="form-control "
            />
        </div>
    </div>
    <div id="template-izpi" className="gjs-row">
        <div id="template-ij34" className="gjs-cell">
            <label id="template-inhms">types</label>
            <div id="template-i9dqx">
                <Select id="template-ic19f" options={this.state.typesoptions} onChange={this.handlechange}
                value={this.state.tickets.types}className="form-control "></Select>
            </div>
        </div>
        <div id="template-ivlj" className="gjs-cell">
            <label id="template-inms7">severity</label>
            <div id="template-iqrjk">
                <Select id="template-idkjj" options={this.state.severityoptions} onChange={this.handlechange}
                value={this.state.tickets.severity}className="form-control "></Select>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Updateticket;