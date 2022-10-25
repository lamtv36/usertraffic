import PropTypes from 'prop-types';

const AdminContent = (props) => {
    return <div className="content-wrapper" style={{minHeight: '93vh'}}>
        <div className="content">
            <div className="container-fluid">
                {props.children}
            </div>
        </div>
    </div>
};

AdminContent.propTypes = {
    title: PropTypes.string,
    titleButton: PropTypes.element,
};

export default AdminContent;