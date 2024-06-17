import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./getallticket.scss";
import  {service}   from './getallticket.service';

class Getallticket extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'name', field: 'name' },{ headerName: 'description', field: 'description' },{ headerName: 'types', field: 'types' },{ headerName: 'severity', field: 'severity' },];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
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
     this.props.history.push({pathname:"/",state:{id : event.data}})
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
        <h2 className="screen-align">getallticket</h2>
        <div>
    <div id="template-i7i7" onClick={()=>this.GetAllValues()}className="ag-theme-material" style={{height: '500px',
        width: '100%'}} >
        <AgGridReact columnDefs={this.columnDefs} pagination={true}
        onGridReady={this.onGridReady} paginationPageSize={5} domLayout={
        "autoHeight"} animateRows={true}defaultColDef={{sortable: true, filter: true }} rowData={this.state.rowData}
        rowSelection={ "single"} onRowSelected={this.onRowSelected }></AgGridReact>
    </div>
</div>
    </>
    );
    };
    };

    export default Getallticket;