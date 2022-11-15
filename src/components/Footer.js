import React from 'react';


const Footer = () => {
return(
<> 
<div className="mt-5 pt-5 pb-5 footer">
<div className="container">
  <div className="row">
    <div className="col-lg-5 col-xs-12 about-company">
      <h2>About Us</h2>
      <p className="pr-5 text-white-50">The Blog is a Sociology Website Putting a Spotlight on the Issues of Today That is Part of the National Zeitgeist.We provide data and articles that Features Current and Relevant Information in Relation to the General Social Scientific Discourse. </p>
      <p><a href="#"><i className="fa fa-youtube-square mr-1"></i></a><a href="#"><i className="fa fa-instagram mr-1"></i></a><a href="#"><i className="fa fa-facebook-official mr-1"></i></a><a href="#"><i className="fa fa-medium mr-1"></i></a></p>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3">Links</h4>
        <ul className="m-0 p-0">
          <li>- <a href="#">Home</a></li>
          <li>- <a href="#">Blog</a></li>
          <li>- <a href="#">About Us</a></li>
          <li>- <a href="#">Contact Us</a></li>
          <li>- <a href="#">Resources</a></li>
        </ul>
    </div>
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
      <p>501 Broadway, New York, NY 10030</p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i>(678) 928-0374</p>
      <p><i className="fa fa-envelope-o mr-3"></i>TB1@main.com</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-50">© 2022. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
</>
);
}


export default Footer;