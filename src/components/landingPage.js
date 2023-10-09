import React from 'react';
import '../styles/css/landingpage.css'
import '../styles/css/style.css'
import Header from './header';
import Footer from './footer';

const LandingPage = () => {
  return (
    <div className="App" >
        <Header />

          {/* backgroundimage for section one */}
        <div className="sec_one">
          <div className="mid_d ">
        

          {/* main section page (First section with image background*/}

            <div className='section1_content'>
              <div className='sec1_contents'>
                <h1 className='order_text'> Order food to your door</h1>

                {/* three column */}
                <div className="form_fill">

                  {/* Enter address column */}
                
                  <div className="in_address">
                    <label id="location-typeahead-home-label" htmlFor="location-typeahead-home-input" className="label_add">Enter delivery address</label>
      
                 
                      <div className="ak_add">
                          <div className="el_add">
                            <div className="location_add">
                              <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>

                          <div className="spacer _16"></div>

                          <input role="combobox" aria-expanded="false" id="location-typeahead-home-input" aria-autocomplete="list" aria-controls="location-typeahead-home-menu" aria-labelledby="location-typeahead-home-label" autoComplete="off" type="text" name="searchTerm" placeholder="Enter delivery address" className="in_add" defaultValue=""/>
                          
                          <div className="spacer _8"></div>

                      </div>


                    <ul id="location-typeahead-home-menu" role="listbox" aria-labelledby="location-typeahead-home-label" className="location_list">
                    </ul>

                  </div>
                
                  <div className="spacer _8"></div>

              {/* Deliver time option */}
                      <div role="button" className="b_cl">
                        <div className="dl_2"> 

                          <div className="spacer _4"></div>

                            {/* Colum2 for deliver button option */}
                            
                          <div className="dl_3">
                            <div className="dl_4">
                              <div className="dl_5">
                                <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="When" role="img" focusable="false">
                                  <path d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z" fill="#000000"></path>
                                </svg>  
                              </div>
                            </div>
                          </div>
                          
                          <div className="dl_6">
                            <div className="dl_7 ">Deliver now</div>
                            <div className="spacer _4"></div>
                            
                            <div className="dl_8">
                              <div className="dl_9">
                                <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="#000000" transform="rotate(180, 12, 12)"></path>
                                </svg>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div> 

              

                  <div className="spacer _8"></div>

                  <button className="fd_1">Find Food</button>

                </div>

                <div className="lk_address">
                  <a rel="nofollow" href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&amp;marketing_vistor_id=8a53e82c-9ac6-4972-8057-789838c3a48f&amp;redirect=%2F&amp;guest_mode=false&amp;app_clip=false" className="lk_1">Sign In</a> for your recent addresses
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="divider"></div>

        {/* section two */}

        {/* create business, add resturant, sign up options */}
          <div className='sec_two'>
            <div className='grid'>
            <a href="//www.uber.com/business/eats" className="link_grid">
              <div className="nt">
                <div className="lazyload-wrapper ">
                  <img alt="Feed your employees" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/88d55f7112efe55f.webp" className="img_grid"/>
                </div>
              </div>
                <p className="p_text1">Feed your employees</p>
                <p className="p_text2">Create a business account</p>
            </a>
            </div>

              {/* grid image two */}

            <div className='grid'>
            <a href="//www.uber.com/business/eats" className="link_grid">
              <div className="nt">
                <div className="lazyload-wrapper ">
                  <img alt="Feed your employees" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/88d55f7112efe55f.webp" className="img_grid"/>
                </div>
              </div>
                <p className="p_text1">Your resturant, delivered</p>
                <p className="p_text2">Add your resturant</p>
            </a>
            </div>

              {/* grid image two */}
            <div className='grid' >
            <a href="//www.uber.com/business/eats" className="link_grid">
              <div className="nt">
                <div className="lazyload-wrapper ">
                  <img alt="Feed your employees" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/88d55f7112efe55f.webp" className="img_grid"/>
                </div>
              </div>
                <p className="p_text1">Deliver with Uber Eats</p>
                <p className="p_text2">Sign up to deliver</p>
            </a>
            </div>

          </div>

          <div className="divider"></div>

          {/* cities near me  */}
          <div className='cities_n'>
            <div className='divider'></div>

            <div >
              <div className='text_one'>
                <h2 className='cities_near_me'>Cities near me </h2>
                <a className="extra" href="/location">View all 500+ cities</a>
              </div>

                {/* City map image */}
                <div className='lazyload-wrapper'>
                  <div className='map_n map_p'>
                    <div className='map_p'></div>
                  </div>
                </div>

                {/* city list */}
                <div className='list_city'>
                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Akron</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Albuquerque</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Bridgeport</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Concord</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Dayton</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">El Paso</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Hartford</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Houston</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Indianapolis</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">McAllen</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Mesa</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Milwaukee</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Nashville</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">New Orleans</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Oklahoma City</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Omaha</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Orlando</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Palm Bay</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Providence</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Queens</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">San Antonio</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Stony Brook</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">Tucson</span>
                    </a>
                  </div>

                  <div className="city_p">
                    <a href="/city/akron-oh" className='aname'>
                      <span className="city_name">West Hollywood</span>
                    </a>
                  </div>

                </div>
              </div>

              <div className="divider"></div>

              {/* Countries with uber eats */}
              <div className='count_tries'>
                <div className='co_ub'>
                  <h2 className='countr'> Countries with Uber Eats</h2>
                  <a className="view_css" href="/location#all-countries">View all countries</a>
                </div>

                <div className='list_country'>
                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Australia</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Belguim</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Canada</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Chile</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Costa Rica</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Dominican Republic</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Ecudor</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">El savador</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">France</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names"> Germany</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Guatemala</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Ireland</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Italy</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names"> Japan</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Kenya</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Mexico</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Netherlands</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names"> New Zealand</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Panama</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Poland</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Portugal</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">South Africa</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names"> Spain</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Sri Lanka</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Sweden</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">Switzerland</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names"> Taiwan(ROC)</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">United Kingdom</span></a>
                  </div>

                  <div className='city_p'>
                  <a href="/au?slr=1" className="link_names"><span className="country_names">United States</span></a>
                  </div>



                </div>



              
            </div>
          </div>
          
          <Footer/>
  
      </div>
          
       
  );
}

export default LandingPage;
