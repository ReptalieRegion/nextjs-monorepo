import Link from "next/link";
import { isAndroid } from "react-device-detect";

export default function AppDownLoadButton() {
  return (
    <Link
      href={
        isAndroid
          ? "https://play.google.com/store/apps/details?id=com.crawl"
          : "https://apps.apple.com/kr/app/%ED%81%AC%EB%A1%A4/id6469619957"
      }
    >
      <p className="app_download_btn">앱 다운로드</p>
    </Link>
  );
}
