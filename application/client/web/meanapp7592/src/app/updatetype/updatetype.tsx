import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updatetype.scss";
import  {service}   from './updatetype.service';

class Updatetype extends React.Component<any, any> {
    queryId: any;
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
    Update  () {
    this.test.Update(this.state.types).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    GetEntityById  () {
    this.test.GetEntityById(this.queryId).then((data:any) => {
    this.setState({types:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">updatetype</h2>
        <div>
    <div id="template-i20j">
        <div id="template-iokv" className="gjs-row">
            <div id="template-inug" className="gjs-cell">
                <label id="template-i6co">Name</label>
                <input type="text" id="template-ifjr" onChange={this.handlechange}
                name="name" value={this.state.types.name}className="form-control " />
                <div type="button" id="template-it372" onClick={()=>this.Update()} className="btn btn-primary "> update</div>
            </div>
            <div id="template-i9b2" className="gjs-cell">
                <label id="template-idbc">description</label>
                <input type="text" id="template-i2mby" onChange={this.handlechange}
                name="description" value={this.state.types.description}className="form-control "
                />
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Updatetype;