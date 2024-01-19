import Image from "next/image";
import logo from "../../../public/images/logo.png";
import AppDownLoadButton from "./components/AppDownLoadButton";
import FirstSections from "./components/FirstSections";
import FourthSection from "./components/FourthSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

export default function Homepage() {
  return (
    <>
      <header id="header" className="p-header__layout p-header_font">
        <div className="header-wrapper">
          <p>CRAWL</p>
          <AppDownLoadButton />
        </div>
      </header>
      <FirstSections />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <footer className="p-footer">
        <div className="p-footer__inner">
          <address className="p-footer__address">
            <div className="p-logo_wrapper">
              <Image src={logo} alt="로고" />
              <strong className="p-logo">CRAWL</strong>
            </div>
            <br />
            어플명: CRAWL
            <br />
            이름: 박윤찬
            <br />
            연락처: 010-4024-3752
            <br />
            Copyright 2023, CRAWL, All rights reserved.
          </address>
        </div>
      </footer>
    </>
  );
}
