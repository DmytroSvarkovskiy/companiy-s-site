import { data } from "./data";
import { ProjectItem } from "./ui/index.client";

export const Projects = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-4 lg:gap-5 3xl:gap-7 items-stretch">
      {data?.map((item) => (
        <ProjectItem key={item.title} project={item} />
      ))}
    </div>
  );
};
