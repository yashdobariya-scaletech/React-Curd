import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div className="form-data-table">
                <table className="table">
                    <caption>Form Data</caption>
                    <th>Company Name</th>
                    <th>Model Name</th>
                    <th>Choose a car type</th>
                    <th>Type Of Car Fule</th>
                    <th>Car Features List</th>
                    <th>Car Overview</th>
                </table>
            </div>
        )
    }
}
