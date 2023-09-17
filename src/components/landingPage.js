import React from 'react';
import '../styles/css/style.css'
import '../styles/css/landingpage.css'
import Header from './header';

const LandingPage = () => {
  return (
    <div className="App" tabIndex={-1}>
      <div className='first_d'>

        <Header />
        <div className="sec_d">
          <div className="mid_d section1"></div>
        </div>

        <div className='d_two'>
          <div className='d_three'>
            <h1 className='order_text'> Order food to your door</h1>

            <div className="add_fill">
              <div className="e_address">
                <label id="location-typeahead-home-label" for="location-typeahead-home-input" class="label_add">Enter delivery address</label>
                <div class="du">
                  <div class="ak_add">
                      <div class="el_add">
                        <div class="location_add">
                          <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                            <path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>

                      <div class="spacer _16"></div>

                      <input role="combobox" aria-expanded="false" id="location-typeahead-home-input" aria-autocomplete="list" aria-controls="location-typeahead-home-menu" aria-labelledby="location-typeahead-home-label" autocomplete="off" type="text" name="searchTerm" placeholder="Enter delivery address" class="in_add" value=""/>
                      
                      <div class="spacer _8"></div>

                    </div>
                </div>

                <ul id="location-typeahead-home-menu" role="listbox" aria-labelledby="location-typeahead-home-label" class="location_list">
                </ul>

              </div>

              <div className="spacer _8"></div>

              <div>
                <div className="deli_t">
                  <div role="button" className="b_cl">
                    <div className="dl_2">

                      <div className="spacer _4"></div>

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
                </div>
              </div>

              <div className="spacer _8"></div>
              <button className="fd_1">Find Food</button>
            </div>

            <div class="lk_address">
              <a rel="nofollow" href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&amp;marketing_vistor_id=8a53e82c-9ac6-4972-8057-789838c3a48f&amp;redirect=%2F&amp;guest_mode=false&amp;app_clip=false" class="lk_1">Sign In</a> for your recent addresses</div>
          </div>
        </div>

      <section classNameName="section2">
        <h2>Section 2</h2>
        {/* Add content for Section 2 */}
      </section>
      </div>
    </div>
  );
}

export default LandingPage;
