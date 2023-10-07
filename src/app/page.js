/* eslint-disable @next/next/no-img-element */

import SectionImgHome from "@/components/SectionImgHome";
import SectionRightHome from "@/components/SectionRightHome";


export default function Home() {
  return (
    <section className="flex justify-around">
      <SectionImgHome /> 
      <SectionRightHome />
    </section>
  )
}
