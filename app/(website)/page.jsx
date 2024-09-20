import Banner from "@/components/Banner";
import EventPromotion from "@/components/EventPromotion";
import Instagram from "@/components/Instagram";
import News from "@/components/News";
import OurProducts from "@/components/OurProducts";
import OurStory from "@/components/OurStory";
import React from "react";

export default function Page() {
  return (
    <div>
      <Banner />
      <OurProducts />
      <EventPromotion />
      <OurStory />
      <News />
      <Instagram />
    </div>
  );
}
