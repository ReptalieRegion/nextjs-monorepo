
'use client';
import Image from 'next/image';
import Link from 'next/link';
import appleKorea from '../../../../public/images/applekorea.png';
import googlePlay from '../../../../public/images/googleplay.png';
import mainLogo from '../../../../public/images/main.jpg';


export default function FirstSections() {
  const handleClickGooglePlay = () => {
    alert('서비스 준비중이예요');
  }
  
  return (
    <section className="first-section">
      <Image src={mainLogo} alt="logo" className="first-section__image" fill />
      <div className="first-section__content">
        <h1 className="first-section__font">
            희귀동물 관리를
            <br />
            크롤에서 쉽고 간편하게
        </h1>
        <div className="first-section__app_store">
            <Link
                className="p-button p-button__font p-button__padding p-button__layout"
                aria-disabled="false"
                href=""
                rel="noreferrer noopener"
            >
                <Image
                    src={appleKorea}
                    alt="apple store button"
                    height="24"
                    width="24"
                    className="p-button__left"
                />
                App Store
            </Link>
            <Link
                href=""
                className="p-button p-button__font p-button__padding p-button__layout"
                aria-disabled="false"
                rel="noreferrer noopener"
                onClick={handleClickGooglePlay}
            >
                <Image src={googlePlay} alt="google play store" height="24" width="24" className="p-button__left" />
                Google Play
            </Link>
        </div>
    </div>
    <a className="first-section__arrow_bottom_btn" href="#second-section">
        <div className="first-section__arrow_bottom">
            <svg width="50" height="50" viewBox="0 0 190 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8 8L94 48.5L182 8"
                    stroke="#DCDCDC"
                    strokeWidth="15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    </a>
  </section>
  );
}
