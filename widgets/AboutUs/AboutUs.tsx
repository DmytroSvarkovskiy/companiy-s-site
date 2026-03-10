import { MapElement, VideoBlock } from "@/entities/index.client";

export const AboutUs = () => {
  return (
    <section className="section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <VideoBlock className="h-150" videoClassName="max-h-150 " />
        <div className="overflow-hidden relative">
          <MapElement className="min-w-425 absolute -top-20 -right-140" />
        </div>
      </div>
    </section>
  );
};
