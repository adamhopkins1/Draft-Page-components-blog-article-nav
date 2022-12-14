import React from "react";

$(document).ready(function(){
  $("#sidebarCollapse").on('click', function(){
    $("#sidebar").toggleClass('active');
  });
});

const Article = () => {
  return (
    <>
      <div class="wrapper">
        {" "}
        <nav id="sidebar">
          {" "}
          <div class="sidebar-header">
            {" "}
            <h3>The Blog</h3> <hr />{" "}
          </div>{" "}
          <ul class="list-unstyled components">
            {" "}
            <p>MENUS</p>{" "}
            <li>
              {" "}
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                Home
              </a>{" "}
              <ul class="collapse list-unstyled" id="homeSubmenu">
                {" "}
                <li>
                  {" "}
                  <a href="#">Technological Sociology</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">Human Economical Sociology</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">Informational Inflation Sociology</a>{" "}
                </li>{" "}
              </ul>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#">Blog</a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                About Us
              </a>{" "}
              <ul class="collapse list-unstyled" id="pageSubmenu">
                {" "}
                <li>
                  {" "}
                  <a href="#">Active</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">Idle</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">Non Active</a>{" "}
                </li>{" "}
              </ul>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#">Contact Us</a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#">Resources</a>{" "}
            </li>{" "}
          </ul>{" "}
          <ul class="list-unstyled CTAs">
            {" "}
            <li>
              {" "}
              <a href="#" class="download">
                Subscribe
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
        <div class="content">
          {" "}
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {" "}
            <button type="button" id="sidebarCollapse" class="btn btn-info">
              {" "}
              <i class="fa fa-align-justify"></i>{" "}
            </button>{" "}
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span class="navbar-toggler-icon"></span>{" "}
            </button>{" "}
            <div class="collapse navbar-collapse" id="navbarNav">
              {" "}
              <ul class="navbar-nav ml-auto">
                {" "}
                <li class="nav-item active">
                  {" "}
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>{" "}
                </li>{" "}
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    Blog
                  </a>{" "}
                </li>{" "}
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                   About Us
                  </a>{" "}
                </li>{" "}
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    Contact
                  </a>{" "}
                </li>{" "}
                {" "}
                  <a class="nav-link" href="#">
                    Resources
                  </a>{" "}
                  </ul>{" "}
            </div>{" "}
          </nav>{" "}
          <div class="content-wrapper">
            {" "}
            <h2>Collapsible Sidebar Using Bootstrap 4</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquam nulla facilisi cras fermentum odio eu. Eget nulla facilisi
              etiam dignissim diam quis enim. Et netus et malesuada fames ac
              turpis egestas integer eget. Tortor at risus viverra adipiscing at
              in tellus. Cras adipiscing enim eu turpis. Malesuada nunc vel
              risus commodo viverra. Enim nulla aliquet porttitor lacus luctus
              accumsan tortor posuere. Ac placerat vestibulum lectus mauris
              ultrices eros. In arcu cursus euismod quis viverra nibh cras. Non
              quam lacus suspendisse faucibus interdum posuere lorem ipsum. In
              fermentum posuere urna nec tincidunt praesent semper. Ultricies mi
              quis hendrerit dolor. Sit amet luctus venenatis lectus magna
              fringilla urna porttitor. Praesent tristique magna sit amet purus
              gravida quis. Enim nunc faucibus a pellentesque sit amet
              porttitor. Amet justo donec enim diam vulputate. Aliquet eget sit
              amet tellus cras. Tincidunt arcu non sodales neque. Semper auctor
              neque vitae tempus quam. In massa tempor nec feugiat nisl pretium
              fusce id. Fames ac turpis egestas integer eget aliquet. Proin
              sagittis nisl rhoncus mattis rhoncus urna neque viverra. Ut sem
              nulla pharetra diam. Vitae tempus quam pellentesque nec nam
              aliquam sem. Eget duis at tellus at urna condimentum mattis.
              Tellus orci ac auctor augue mauris. Eget sit amet tellus cras
              adipiscing enim eu turpis. Nam aliquam sem et tortor. Ac tincidunt
              vitae semper quis lectus. Mollis nunc sed id semper risus in
              hendrerit. Tincidunt id aliquet risus feugiat. Massa eget egestas
              purus viverra accumsan in nisl. Quis enim lobortis scelerisque
              fermentum. Ut diam quam nulla porttitor massa. Nunc sed id semper
              risus in. Mattis pellentesque id nibh tortor. Ac orci phasellus
              egestas tellus rutrum. Congue nisi vitae suscipit tellus mauris a
              diam. Facilisis volutpat est velit egestas. Quam viverra orci
              sagittis eu volutpat odio. Etiam dignissim diam quis enim
              lobortis. Sollicitudin nibh sit amet commodo nulla facilisi nullam
              vehicula. Sit amet luctus venenatis lectus. Mi eget mauris
              pharetra et ultrices neque. Sit amet cursus sit amet dictum sit
              amet. Eget lorem dolor sed viverra. Neque egestas congue quisque
              egestas diam. Vestibulum lectus mauris ultrices eros in cursus
              turpis. Et leo duis ut diam quam nulla. Egestas sed tempus urna et
              pharetra. Aliquam sem et tortor consequat id. Sollicitudin tempor
              id eu nisl nunc mi. .
            </p>{" "}
            <div class="line"></div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Article;
