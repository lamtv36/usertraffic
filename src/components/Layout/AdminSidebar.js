import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

class AdminSidebar extends React.Component {
  render() {
    const { pathname } = this.props.router
    return (
      <aside
        className="main-sidebar sidebar-bg-dark sidebar-color-primary shadow"
        style={{ minHeight: '846px' }}
      >
        <Link href="/">
          <a className="brand-link text-center">
            <i className="fa fa-home fa-2x brand-image ml-2" />
            <span className="brand-text font-weight-light">
              {this.props.projectName && this.props.projectName}
            </span>
          </a>
        </Link>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={[
                      'nav-link',
                      pathname === '/' ? 'active' : '',
                    ].join(' ')}
                  >
                    <i className="nav-icon fa fa-home" />
                    <p>Home</p>
                  </a>
                </Link>
              </li>
              <li className="nav-header">
                <i className="nav-icon fas fa-circle"></i>
                Nhiệm Vụ
              </li>
              <li className="nav-item">
                <Link href="/missions">
                  <a
                    className={[
                      'nav-link',
                      pathname === '/missions' ? 'active' : '',
                    ].join(' ')}
                  >
                    <i className="nav-icon fa fa-user-circle" />
                    <p>
                        Nhiệm Vụ Từ Khóa
                      <span className="right badge badge-success">2</span>
                    </p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/buytrafic">
                  <a
                    className={[
                      'nav-link',
                      pathname === '/buytrafic' ? 'active' : '',
                    ].join(' ')}
                  >
                    <i className="nav-icon fa fa-user-circle" />
                    <p>
                        Mua Trafic User
                      <span className="right badge badge-success">2</span>
                    </p>
                  </a>
                </Link>
              </li>
              <li className="nav-header">
                <i className="nav-icon fas fa-circle"></i>
                Cá Nhân
              </li>
              <li className="nav-item">
                <Link href="/deposit">
                  <a
                    className={[
                      'nav-link',
                      pathname === '/deposit' ? 'active' : '',
                    ].join(' ')}
                  >
                    <i className="nav-icon fa fa-user-circle" />
                    <p>
                        Nạp Tiền
                      <span className="right badge badge-success">2</span>
                    </p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cashout">
                  <a
                    className={[
                      'nav-link',
                      pathname === '/cashout' ? 'active' : '',
                    ].join(' ')}
                  >
                    <i className="nav-icon fa fa-user-circle" />
                    <p>
                        Rút Tiền
                      <span className="right badge badge-success">2</span>
                    </p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/intro">
                  <a
                    className={[
                      'nav-link',
                      pathname === '/intro' ? 'active' : '',
                    ].join(' ')}
                  >
                    <i className="nav-icon fa fa-user-circle" />
                    <p>
                      Giới Thiệu
                      <span className="right badge badge-success">2</span>
                    </p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/guilde">
                  <a
                    className={[
                      'nav-link',
                      pathname === '/guilde' ? 'active' : '',
                    ].join(' ')}
                  >
                    <i className="nav-icon fa fa-user-circle" />
                    <p>
                      Hướng Dẫn
                      <span className="right badge badge-success">2</span>
                    </p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/profile">
                  <a
                    className={[
                      'nav-link',
                      pathname === '/profile' ? 'active' : '',
                    ].join(' ')}
                  >
                    <i className="nav-icon fa fa-user-circle" />
                    <p>
                      Cá Nhân
                      <span className="right badge badge-success">2</span>
                    </p>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    )
  }
}

AdminSidebar.propTypes = {
  projectName: PropTypes.string,
}

AdminSidebar.defaultProps = {
  projectName: 'AdminLTE 4',
}

export default withRouter(AdminSidebar)
