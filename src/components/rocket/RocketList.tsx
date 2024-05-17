import RocketListItem from "./RocketListItem";
import { rocketList } from "./data/rocketList";

export default function RocketList() {
  return (
    <div className="flex flex-grow flex-col gap-8 px-0 lg:w-full lg:gap-32 lg:px-[10%] lg:py-16">
      {rocketList.map((data, index) => (
        <RocketListItem
          key={index}
          data={{ ...data }}
          index={index}
          className={index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}
        />
      ))}
    </div>
  );
}
