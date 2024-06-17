import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updateseverirty.scss";
import  {service}   from './updateseverirty.service';

class Updateseverirty extends React.Component<any, any> {
    queryId: any;
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
    Update  () {
    this.test.Update(this.state.severity).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    GetEntityById  () {
    this.test.GetEntityById(this.queryId).then((data:any) => {
    this.setState({severity:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">updateseverirty</h2>
        <div>
    <div id="template-iulj" className="gjs-row">
        <div id="template-i5yu" className="gjs-cell">
            <label id="template-iwph">Name</label>
            <input type="text" id="template-ifo1" onChange={this.handlechange}
            name="name" value={this.state.severity.name}className="form-control " />
            <div type="button" id="template-iorxa" onClick={()=>this.Update()} className="btn btn-primary "> update</div>
        </div>
        <div id="template-ie3i" className="gjs-cell">
            <label id="template-itje">Description</label>
            <input type="text" id="template-i5px" onChange={this.handlechange}
            name="description" value={this.state.severity.description}className="form-control "
            />
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Updateseverirty;