
import React from 'react'
import AdminHeader from "../../components/Layout/AdminHeader";
import AdminSidebar from "../../components/Layout/AdminSidebar";
import AdminControlSidebar from "../../components/Layout/AdminControlSidebar";
import AdminContent from "../../components/Layout/AdminContent";
import AdminFooter from "../../components/Layout/AdminFooter";

import AdminOverview from "../../components/Layout/AdminOverview";
import PropTypes from 'prop-types';

/**
 * Main admin layout - A Higher Order Component
 */
class AdminLayoutHoc extends React.Component {
    render() {
        return <div className="wrapper">
            <AdminHeader/>
            <AdminSidebar/>
            <AdminContent title={this.props.contentTitle} titleButton={this.props.contentTitleButton}>
                <AdminOverview />
                {this.props.children}
            </AdminContent>
            <AdminControlSidebar/>
            <AdminFooter rightContent={'Some text for the footer'} leftContent={<div>I must be an element</div>}/>
        </div>
    }
}

AdminLayoutHoc.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
};
export default AdminLayoutHoc