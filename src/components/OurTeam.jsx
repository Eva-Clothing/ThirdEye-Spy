import React from "react";

const OurTeam = () => {
    return (
        <div className="our-team">
          <div class="row mt-40">
                <div class="col-md-4 col-sm-6">
                    <div class="box1">
                        <img src="http://bestjquery.com/tutorial/hover-effect/demo206/images/img-1.jpg" alt="" />
                        <h3 class="title">Rupam</h3>
                        <ul class="icon">
                            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                            <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* <div class="col-md-4 col-sm-6">
                    <div class="box1">
                        <img src="http://bestjquery.com/tutorial/hover-effect/demo206/images/img-2.jpg" alt="" class="img-thumbn" />
                        <h3 class="title">Anwesha</h3>
                        <ul class="icon">
                            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                            <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                </div> */}
                <div class="col-md-4 col-sm-6">
                    <div class="box1">
                        <img src="http://bestjquery.com/tutorial/hover-effect/demo206/images/img-3.jpg" alt="" />
                        <h3 class="title">Sourav</h3>
                        <ul class="icon">
                            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                            <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
};

export default OurTeam;