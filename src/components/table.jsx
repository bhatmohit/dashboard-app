import React, {Component} from 'react';
import webdatarocks from 'webdatarocks';

class Table extends Component {
    render(){
        const pivot = new webdatarocks({
            container: "#wdr-component",
            toolbar: true,
            report: {
                dataSource: {
                    filename: "https://cdn.webdatarocks.com/data/data.csv"
                }
            }
        });
        return(
       <div>Table
       {/* <pivot></pivot> */}
       </div>
       );
    }
}
export default Table;