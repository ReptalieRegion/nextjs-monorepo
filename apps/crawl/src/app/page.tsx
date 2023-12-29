import Link from "next/link";


export default function Page(): JSX.Element {
  return (
    <main>
      <Link href={'./privacy-policy'}>개인정보 처리 방칭</Link>
      <Link href={'./privacy-policy'}>actions</Link>
    </main>
  );
}
