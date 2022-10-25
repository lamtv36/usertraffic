import React from 'react'
import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import DataTable from "../components/tables/DataTable"

export default class Index extends React.Component {
    render() {
        return <AdminLayoutHoc
            contentTitle={'Users'}
            contentTitleButton={<Link href="/add-user">
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-user-plus fa-fw"/> Add a new user</button>
            </Link>}
            url={this.props.url}
        >
        <DataTable />
        </AdminLayoutHoc>
    }
}