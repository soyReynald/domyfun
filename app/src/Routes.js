import React from "react";
import ContactUs from "pages/ContactUs";
import Gallery from "pages/Gallery";
import BlogDetails from "pages/BlogDetails";
import BlogStandard from "pages/BlogStandard";
import FAQ from "pages/FAQ";
import AccommodationDetails from "pages/AccommodationDetails";
import AccommodationSlider from "pages/AccommodationSlider";
import AccommodationSideInfo from "pages/AccommodationSideInfo";
import AccommodationStandard from "pages/AccommodationStandard";
import AboutUs from "pages/AboutUs";
import HomeThree from "pages/HomeThree";
import HomeTwo from "pages/HomeTwo";
import HomeOne from "pages/HomeOne";
import Elements from "pages/Elements";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/homeone" element={<HomeOne />} />
        <Route path="/hometwo" element={<HomeTwo />} />
        <Route path="/homethree" element={<HomeThree />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/accommodationstandard"
          element={<AccommodationStandard />}
        />
        <Route
          path="/accommodationsideinfo"
          element={<AccommodationSideInfo />}
        />
        <Route path="/accommodationslider" element={<AccommodationSlider />} />
        <Route
          path="/accommodationdetails"
          element={<AccommodationDetails />}
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blogstandard" element={<BlogStandard />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
