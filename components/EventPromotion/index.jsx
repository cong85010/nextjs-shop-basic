import { Button } from "../ui/button";
import Title from "../ui/title";

function EventPromotion() {
  const Evens = [
    {
      title: "Relaxing & Pampering",
      description: "Pariatur ad nisi ex tempor ea",
      image: "/images/event1.png",
      link: "#",
    },
    {
      title: "Smooth & Bright Skin",
      description: "Pariatur ad nisi ex tempor ea",
      image: "/images/event2.png",
      link: "#",
    },
  ];
  return (
    <div className="mt-24 max-w-7xl mx-auto px-2">
      <Title
        title="Event promotion"
        right={
          <Button variant="ghost" className="text-sm">
            See all
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
        {Evens.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-4 rounded-lg"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="pl-10  w-1/2">
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
              <Button variant="default" className="mt-4">
                Explore
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventPromotion;
