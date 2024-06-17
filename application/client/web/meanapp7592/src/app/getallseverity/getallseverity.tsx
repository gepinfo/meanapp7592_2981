import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./getallseverity.scss";
import  {service}   from './getallseverity.service';

class Getallseverity extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'name', field: 'name' },{ headerName: 'description', field: 'description' },];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
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
    this.GpGetAllValues();
    }
    GetAllValues  () {
    this.test.GetAllValues().then((data:any) => {
    this.setState({rowData:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    onRowSelected(event:any)
    {
    this.props.history.push({pathname:"/updateseverirty",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">getallseverity</h2>
        <div>
    <div id="template-i0l7">
        <div id="template-i616" onClick={()=>this.GetAllValues()}className="ag-theme-material" style={{height: '500px',
            width: '100%'}} >
            <AgGridReact columnDefs={this.columnDefs} pagination={true}
            onGridReady={this.onGridReady} paginationPageSize={5} domLayout={
            "autoHeight"} animateRows={true}defaultColDef={{sortable: true, filter: true }} rowData={this.state.rowData}
            rowSelection={ "single"} onRowSelected={this.onRowSelected }></AgGridReact>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Getallseverity;