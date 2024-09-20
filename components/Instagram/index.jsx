import Image from "next/image";
import { Button } from "../ui/button";
import Title from "../ui/title";

function Instagram() {
  const Images = [
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
    "/images/instagram1.png",
  ];
  return (
    <div className="mt-24 max-w-7xl mx-auto mb-10">
      <Title title="Event promotion" subTitle="@yourinstagram_offical" />

      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 mt-8">
        {Images.map((item, index) => (
          <Image key={index} src={item} width={300} height={300} />
        ))}
      </div>
    </div>
  );
}

export default Instagram;
