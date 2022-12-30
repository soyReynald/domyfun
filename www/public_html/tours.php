<?php require_once('main_controller.php'); ?>
<!DOCTYPE html>
<!--[if IE 7]><html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]><html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
    <head>
        <meta charset="utf-8">
        <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="agency, ecommerce">

        <title>Do my fun travel</title>

        <!-- Favicon -->
        <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="shortcut icon" href="assets/ico/favicon.ico">

        <!-- Font Icon -->
        <link href="assets/css/plugin/font-awesome.min.css" rel="stylesheet" type="text/css">  

        <!-- CSS Global -->
        <link rel='stylesheet' href='assets/css/plugin/bootstrap.min.css'>
        <link rel='stylesheet' href='assets/css/plugin/bootstrap-select.min.css'>
        <link rel='stylesheet' href='assets/css/plugin/datepicker.css'>
        <link rel='stylesheet' href='assets/css/plugin/owl.carousel.min.css'>        
        <link rel='stylesheet' href='assets/css/plugin/animate.css'>        
        <link href="assets/css/plugin/magnify.css" rel="stylesheet" type="text/css">  


        <!-- Custom CSS -->
        <link href="./assets/css/style.css" rel="stylesheet" type="text/css">
        

        <!-- Color CSS --> 
        <link href="assets/css/multicolor/theme-color.css" rel="stylesheet" id="theme-config-link">

        <!--[if lt IE 9]>
        <script src="assets/js/plugin/html5shiv.js"></script>
        <script src="assets/js/plugin/respond.js"></script>
        <![endif]-->
        
        <style>
            #gridOfTours {
                padding-left: 25px;
            }

            .listing-box {
                padding-left: 0px;
            }

            #nextButton, #prevButton{
                visibility: visible;
                width: 45px;
                border-radius: 10px;
                border: 0.5px solid #ccc;
            }

            #nextButton div span {
                display:none;
            }

            #buttons-container {
                width: 100%;
                position: relative;
                display: inline-block;
                text-align: end;
            }

            .sec-space {
                padding-bottom: 40px;
                padding-top: 40px;
            }
        </style>
    </head>

    <body id="home" class="wide">
        <!-- WRAPPER -->
        <main class="wrapper"> 
            <!-- CONTENT AREA -->
            <article class="home-three">
                <!-- Top Header-1 Start -->
                <header class="top-bar-2">                   
                    <div class="container">
                        <div class="block-inline">
                            <div class="left">                                
                                <ul class="top-nav list-items">
                                    <li>
                                        <form action="#" class="currency">
                                            <div class="search-selectpicker selectpicker-wrapper">
                                                <select  class="selectpicker" data-width="100%" data-toggle="tooltip">
                                                    <option>USD</option>
                                                    <option>DOP</option>
                                                </select>
                                            </div>                                                   
                                        </form> 
                                    </li>
                                    <li>
                                        <form action="#" class="currency">
                                            <div class="search-selectpicker selectpicker-wrapper">
                                                <select class="selectpicker" data-width="100%" data-toggle="tooltip">
                                                    <option>United State</option>
                                                    <option>Dominican Republic</option>
                                                </select>
                                            </div>                                                   
                                        </form> 
                                    </li>
                                    <li>
                                        <span>Phone : </span> <span class="fw-600">+130 5686 8310</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="right">
                                <ul class="social-icons-2">
                                    <li> <a href="#" class="fa fa-facebook"></a> </li>
                                    <!-- <li> <a href="#" class="fa fa-twitter"></a> </li> -->
                                    <!-- <li> <a href="#" class="fa fa-google-plus"></a> </li> -->
                                    <li> <a href="#" class="fa fa-instagram"></a> </li>
                                    <!-- <li> <a href="#" class="fa fa-behance"></a> </li> -->
                                </ul>
                                <ul class="top-nav list-items">
                                    <li> <a href="#"> <span class="fa fa-pencil-square-o"></span> Review </a> </li>
                                    <li> <a href="#"> Join </a> </li>
                                    <li> <a href="login.html"> login </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>                   
                </header>
                <!-- / Top Header-1 Ends -->   

                <!-- Main Header-1 Start -->
                <header class="main-header">
                    <div class="header-fix-wrap header-1">
                        <div class="container rel-div">
                            <div class="logo">
                                <a href="index.html">  <img alt="" src="assets/images/logo/logo-1.png" width="100" /> </a>
                                <!-- <span>TRAVEL AGENCY</span> -->
                            </div>                
                            <div class="responsive-toggle fa fa-bars"> </div>

                            <!-- Main Header Start -->
                            <div class="menu-bar">  
                                <div class="responsive-toggle fa fa-bars"> </div>
                                <nav id="primary-navigation">            
                                    <ul class="primary-navbar">  
                                        <li><a href="index.php">Home</a></li>                         
                                        <li><a href="hotels.php">Hotels</a></li>
                                        <li class="active"><a href="tours.php">Tours</a></li>
                                        <li><a href="transfers.html">Transfers</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li class="active"><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- / Main Header Ends -->   
                        </div>
                    </div>
                </header>
                <!-- / Main Header-1 Ends -->

                <!--Breadcrumb Section Start-->
                <section class="breadcrumb-bg bg-4 white-color" style="position: relative;">   
                    <div class="site-breadcumb banner-title-wrapper">  
                        <div class="container ">     
                            <div class="title-wrap-2">
                                <h2 class="section-title"> TOURS </h2>
                            </div>
                        </div> 
                    </div>
                    <!-- <a href="#" style="position: absolute; top: 230px;"> Home </a>  -->
                </section>
                <!--Breadcrumb Section End-->

                <!-- Hotel Price Finder Start -->
                <section class="theme-color-bg price-finder">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-sm-12">
                                <div class="info">
                                    <!-- <img alt="" src="assets/images/icons/icon-20.png" /> -->
                                    <div class="title">
                                        <!-- <h2 class="title-1"> HOTEL PRICE FINDER </h2>
                                        <span class="fsz-13">The best hotel with lower price</span> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8 col-sm-12">
                                <form role="form" class="search-form row" method="post">   
                                    <div class="form-group col-sm-4">
                                        <!-- <input class="dpd1 form-control border" required="" data-date-format="dd-mm-yyyy" placeholder="Check in date" type="text">                                                    
                                        <span class="fa fa-calendar theme-color"></span> -->
                                    </div>
                                    <div class="form-group col-sm-4">
                                        <!-- <input class="dpd2 form-control" required="" data-date-format="dd-mm-yyyy" placeholder="Check out date" type="text">                                                    
                                        <span class="fa fa-calendar theme-color"></span> -->
                                    </div>
                                    <div class="form-group col-sm-4">                                         
                                        <!-- <button class="theme-btn btn-2" type="submit"> Search Price </button> -->
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- / Hotel Price Finder Ends -->   

                <!-- Listing Start -->
                <section class="listing-wrap pt-50">
                    <div class="container">
                        <div class="clearfix">
                            <div class="col-md-3 col-sm-4 pt-50 no-padding listing-sidebar">
                                <div class="widget-map">                          
                                    <div class="contact-map">  <div id="map"></div> </div>
                                </div>
                            </div>
                            <div class="col-md-9 col-sm-8 pt-50 style-one no-padding" id="gridOfTours">
                                <!--
                                    Tours rendering here
                                -->
                                <?php
                                    foreach ($_tours as $row) {
                                ?>
                                    <a href="#" class="group">
                                        <div class="listing-box col-lg-12 col-md-6">
                                            <div class="listing-feature">
                                                <div class="img">
                                                    <div class="img-slider dots-3 owl-carousel">
                                                        <div class="item bg-img" style='background-image: url("./API/public/<?= $row['feat_image'] ?>"); background-size: cover;'>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul class="hotel-feature">
                                                    <li>
                                                        <div class="tbl-wrp">
                                                            <div class="text-middle">
                                                                <div class="tbl-cell">
                                                                    <img alt="" src="assets/images/icons/icon-15.png"> <span>CAR PARK</span> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="tbl-wrp">
                                                            <div class="text-middle">
                                                                <div class="tbl-cell">
                                                                    <img alt="" src="assets/images/icons/icon-16.png"> <span>SWIMMING POOL</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="tbl-wrp">
                                                            <div class="text-middle">
                                                                <div class="tbl-cell">
                                                                    <img alt="" src="assets/images/icons/icon-17.png"> <span>RESTAURANT</span> 
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </li>
                                                    <li> 
                                                        <div class="tbl-wrp">
                                                            <div class="text-middle">
                                                                <div class="tbl-cell">
                                                                    <img alt="" src="assets/images/icons/icon-18.png"> <span>FITNESS CENTER</span> 
                                                                </div>
                                                            </div>
                                                        </div>  
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="listing-info">
                                                <div class="detail">
                                                    <h2 class="fsz-20 fw-600 hotel-title"><?= $row['title'] ?></h2>
                                                    <div class="">
                                                     <?php echo substr($row['description'], 0, 220)."..."; ?>
                                                    </div>

                                                    <div class="col-md-12" style="padding-left: 0px;margin-top: 10px;">
                                                        <div class="form-group col-md-4" style="float: right;">                                               
                                                            <button class="theme-btn" data-width="100%" type="submit"> Ver Más </button>                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                <?php
                                    }
                                ?>
                            </div>

                            <div class="flex flex-row mx-auto justify-center mt-5" id="buttons-container">
                                <button type="button" id="prevButton" class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
                                  <div class="flex flex-row align-middle">
                                    🡸
                                  </div>
                                </button>
                                <button type="button" id="nextButton"  class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
                                  <div class="flex flex-row align-middle">
                                    🢂
                                  </div>
                                </button>
                              </div>
                        </div>
                        <hr class="divider-1">
                    </div>                
                </section>
                <!-- / Listing Ends -->   


            </article>
            <!-- / CONTENT AREA -->

            <!-- FOOTER -->
            <footer class="page-footer">             
                <div class="light-bg sec-space">
                    <div class="container">
                        <!-- Footer Logo Start -->
                        <div class="logo">
                            <a href="index.html">  <img alt="" src="assets/images/logo/logo-1.png"  width="150"> </a>
                        </div>
                        <!-- / Footer Logo Ends -->  
                    </div>
                </div>
                <!-- Footer menu Start -->
                <div class="text-center">
                    <div class="container footer-menu">
                        <ul class="primary-navbar">
                            <li><a href="#"> About Us.  </a></li>
                            <li><a href="#">Write a review. </a></li>
                            <li><a href="#">  Careers. </a></li>
                            <li><a href="#">Membership. </a></li>
                            <li><a href="#">Site Map. </a></li>
                            <li><a href="#">Become an Affiliate. </a></li>
                            <li><a href="#">Travelers’ Choice. </a></li>
                            <li><a href="#">Help Center. </a></li>
                        </ul>
                    </div>
                    <hr class="divider-1" />
                    <div class="container copyright">
                        <p> <a href="index.html" class="theme-color fw-500">Vetrov</a> ©2017 Made with <i class="fa fa-heart red-clr"></i> All Right Reserved </p>
                    </div>
                </div>
                <!-- / Footer Menu Ends -->  

            </footer>
            <!-- /FOOTER -->

            <div id="to-top" class="to-top"> <i class="fa fa-angle-up"></i> </div>

        </main>
        <!-- /WRAPPER -->


        <!-- JS Global -->
        <script src='assets/js/plugin/jquery-2.2.4.min.js'></script>
        <script src='assets/js/plugin/bootstrap.min.js'></script>
        <script src='assets/js/plugin/bootstrap-select.min.js'></script>
        <script src='assets/js/plugin/bootstrap-datepicker.js'></script>
        <script src='assets/js/plugin/owl.carousel.min.js'></script>
        <script src="assets/js/plugin/jquery.magnify.js" type="text/javascript"></script>

        <script src='assets/js/plugin/isotope.pkgd.min.js'></script>
        <script src="assets/js/plugin/masonry.pkgd.min.js" type="text/javascript"></script>


        <!-- Custom JS -->   
        <script src="assets/js/theme.js" type="text/javascript"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwarlVfqlWKfonKl9T0wr9VGC0ynvbdiU&callback=initMap" async defer></script>

        <!--[if (gte IE 9)|!(IE)]><!-->   
        <script src="assets/js/jquery.cookie.js"></script>        
        <script src="assets/js/theme-config.js"></script>
        <!--<![endif]-->
        
        <!-- <script type="module" src="index.js"></script> -->
    </body>
</html>