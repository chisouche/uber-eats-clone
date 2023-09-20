// Header.js

import React, {useState} from 'react';
import '../styles/css/header.css'; // Import the CSS file for styling

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
  <header className="header_nav">

    <div className=' first'>

    {/* navigation bar */}
      <div className={`nav-bar ${sidebarOpen ? 'sidebar-open' : ''}`}>

        {/* menu icon*/}
        <button className={`menu-icon ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="22px" height="22px">
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" id='strokeMainSVG'/>
          </svg>
        </button>
        
        <div className='spacer _32'></div>

        {/* Uber Eats Logo */}
        <a aria-current="page" className="active" href="/">
          <img alt="Uber Eats Home" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"  width="146"  height="24" className="img-style"/>
        </a>

        <div className='spacer _128'></div>

        <div className='lineOne'>
          <div className='notsure'></div></div>

        <div className='next_two'></div> 
        <div className='spacer _24'></div> 

        <a rel="nofollow" tabIndex="0" href="/" 
          data-test="header-sign-in" className="login_btn">
            <svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" className="svg_login">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"></path></svg>
            <div className="spacer _4"></div>
            Log in 
        </a> 
        <div className="spacer _16"></div>

        <a rel="nofollow" tabIndex="0" href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&amp;marketing_vistor_id=8a53e82c-9ac6-4972-8057-789838c3a48f&amp;redirect=%2F&amp;guest_mode=false&amp;app_clip=false" data-test="header-sign-in" className="sign_up">Sign up</a>
        <div>
            {/* Navigation links */} 
          
        </div>

      </div>
    </div>

    {/* sidebar  */}
    <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
        <aside className= {` side_content sidebar ${sidebarOpen ? 'open' : ''}`}>
          <nav>
            <div className='nav_content'>
              <div className='cf_sidebar'>
                <a rel="nofollow" href='/' className='sp_sidebar'>
                  Sign up
                </a>

                <div className='sp_line'></div>

                <a rel="nofollow" href='/' className='lg_sidebar'>
                  Log in
                </a>

                <div className='content_list'>
                  <ul>
                    <li className='bd_sidebar'>
                      <a className='bl_sidebar' href='//www.uber.com/business/eats'>Create a business account</a>
                    </li>
                    <li className='bd_sidebar'><a className='bl_sidebar' href='https://merchants.ubereats.com/ng/en/s/signup/'>Add your resturant</a></li> 
                    <li className='bd_sidebar'><a  className='bl_sidebar' href='https://www.uber.com/ng/en/deliver/'>Sign up to deliver</a></li>
                  </ul>
                </div>

              </div>
            
              <div className='side_b'>
                <div className='bottonBar'>
                  <img alt="Uber Eats" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg" className="ub_sidebar"/>
                  <div className="spacer _16"></div>
                  <p className='pd_sidebar'> There's more to love in the app.</p>
                </div>  


                <div className="ps_sidebar">
                  <a href="https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277" className=" ak_sidebar">

                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="icon_svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.268 4.231c.649-.838 1.14-2.022.963-3.231-1.061.074-2.301.752-3.025 1.637-.66.802-1.201 1.994-.99 3.152 1.16.036 2.357-.66 3.052-1.558zM20 15.602c-.464 1.035-.688 1.497-1.285 2.413-.834 1.28-2.01 2.872-3.47 2.884-1.294.014-1.628-.849-3.385-.838-1.758.01-2.124.854-3.421.841-1.458-.013-2.572-1.45-3.406-2.729-2.334-3.574-2.58-7.769-1.14-10C4.916 6.587 6.53 5.66 8.048 5.66c1.543 0 2.515.852 3.793.852 1.24 0 1.995-.854 3.78-.854 1.352 0 2.784.74 3.803 2.018-3.34 1.842-2.8 6.642.576 7.925z"></path>
                    </svg>
                    
                    <div className="spacer _8"></div>
                    iPhone
                  </a>
                  
                  <div className="spacer _8"></div>
                  <a href="https://play.google.com/store/apps/details?id=com.ubercab.eats" className="ak_sidebar">

                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="icon_svg"><g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.297 3.415l-.233.343c1.77.804 2.97 2.326 2.97 4.069H6.341c0-1.743 1.199-3.265 2.97-4.069l-.234-.343-.233-.338-.52-.761a.2.2 0 01.058-.282.214.214 0 01.29.057l.793 1.157.238.348a7.035 7.035 0 012.484-.444c.888 0 1.729.16 2.484.444l1.032-1.505a.21.21 0 01.288-.057.198.198 0 01.059.282l-.52.76-.234.339zm-1.23 2.176c0 .337.28.61.626.61a.618.618 0 00.627-.61.617.617 0 00-.627-.61.617.617 0 00-.627.61zm-4.385.61a.618.618 0 01-.627-.61c0-.338.28-.61.627-.61.346 0 .627.272.627.61 0 .337-.28.61-.627.61z"></path>
                      <path d="M6.342 8.639h11.692v8.942c0 .71-.592 1.288-1.322 1.288h-.956c.033.107.052.22.052.338v2.574c0 .673-.562 1.22-1.254 1.22s-1.253-.547-1.253-1.22v-2.574c0-.119.018-.23.05-.338h-2.327c.032.107.051.22.051.338v2.574c0 .673-.562 1.22-1.253 1.22-.692 0-1.254-.547-1.254-1.22v-2.574c0-.119.018-.23.05-.338h-.953c-.73 0-1.323-.578-1.323-1.288V8.639zm-2.089 0C3.561 8.639 3 9.185 3 9.858v5.216c0 .673.56 1.22 1.253 1.22.692 0 1.253-.547 1.253-1.22V9.858c0-.673-.561-1.219-1.253-1.219zM18.87 9.858c0-.673.56-1.219 1.253-1.219.691 0 1.252.546 1.252 1.219v5.216c0 .673-.56 1.22-1.252 1.22-.693 0-1.254-.547-1.254-1.22V9.858z"></path></g>
                    </svg>

                    <div className="spacer _8"></div>Android
                  </a>
                    
                </div>
              </div>
          </div>

            <div>

            </div>

          </nav>
        </aside>
        
    
    
    
    </div>
  </header>
  );
}

export default Header;
