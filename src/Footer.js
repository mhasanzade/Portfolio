import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { Component } from 'react';
import "./css/footer.css";
export default class Footer extends Component {
      render() {
            return (
                  <div>
                        <div class="footer">
                              <div class="container">
                                    <br />

                                    <div class="collab">
                                          <div class="row">
                                                <div class="col-lg-12">
                                                      <p>Got an interesting project? I can help you.</p>
                                                </div>
                                          </div>
                                    </div>

                                    <br />

                                    <div class="hr">
                                          <div class="row"></div>
                                    </div>

                                    <br />

                                    <div class="info">
                                          <div class="row">
                                                <div class="col-lg-6 col-md-12 col-sm-12 col-12" id="personal">
                                                      <p>connect with me</p>
                                                      <h4>ig @_mhasanzade</h4>
                                                      <br />
                                                </div>


                                                <div class="col-lg-6 col-md-12 col-sm-12 col-12" id="address">
                                                      <p>say hello</p>
                                                      <h4>
                                                            <a href=""><h4>madina.hszd@gmail.com</h4></a>
                                                      </h4>
                                                      <br />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            )
      }
}
