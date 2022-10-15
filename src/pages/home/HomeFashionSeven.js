import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderFifteen from "../../wrappers/hero-slider/HeroSliderFifteen";
import TabProductNine from "../../wrappers/product/TabProductNine";
import BannerEleven from "../../wrappers/banner/BannerEleven";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";

const HomeFashionSeven = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderFifteen />
        {/* tab product */}
        <TabProductNine
          category="fashion"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />
        {/* banner */}
        <BannerEleven />
        {/* countdown */}
        <CountDownThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="November 13, 2021 12:12:00"
          countDownImage="/assets/img/banner/deal-2.png"
        />
        {/* feature icon */}
        
        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionSeven;
