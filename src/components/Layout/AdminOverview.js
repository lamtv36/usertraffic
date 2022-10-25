const AdminOverview = (props) => {
    return (
        <div className=" row  layout-top-spacing">
          <div className="col-lg-3 col-12">
            <div className="small-box bg-primary">
              <div className="inner">
                <h3 style={{"fontSize": "24px"}}>20,280 đ</h3>
  
                <p>Thu nhập</p>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-box"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="small-box bg-warning">
              <div className="inner">
                <h3 style={{"fontSize": "24px"}}>0 đ</h3>
                <p>Hoa hồng</p>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="small-box bg-danger">
              <div className="inner">
                <h3 style={{"fontSize": "24px"}}>20,280 đ</h3>
                <p>Tổng cộng</p>
              </div>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  width="68"
                  height="68"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
  
          <div className="col-lg-3 col-12">
            <div className="small-box bg-success">
              <div className="inner">
                <h3 style={{"fontSize": "24px"}}>280 đ</h3>
                <p>Số dư</p>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-dollar-sign"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
    )
  }
  
  export default AdminOverview
  