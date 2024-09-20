import { Play } from "lucide-react";
import { Button } from "../ui/button";
import Title from "../ui/title";

function OurStory() {
  return (
    <div className="mt-24">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Our story"
          right={
            <Button variant="ghost" className="text-sm">
              See all
            </Button>
          }
        />
      </div>
      <div
        className="w-full relative mt-5 h-[300px] md:h-[500px] lg:h-[700px] "
        style={{
          backgroundImage: `url(/images/our-story.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Button
          variant="default"
          className="bg-[#171A1F] absolute right-20 bottom-10 mt-4"
        >
          Watch video
          <Play size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default OurStory;
