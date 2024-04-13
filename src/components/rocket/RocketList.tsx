import RocketListItem from "./RocketListItem";
import { rocketList } from "./data/rocketList";

export default function RocketList() {
  return (
    <div className="mr-[15%] flex flex-grow flex-col gap-8 px-[10%] lg:mr-0 lg:gap-32 lg:py-16">
      {rocketList.map((data, index) => (
        <RocketListItem
          key={index}
          data={{ ...data }}
          className={index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}
        />
      ))}
    </div>
  );
}
