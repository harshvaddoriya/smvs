import EventCard from "../../../components/common/EventCard/EventCard";
import Images from "../../../assets/images/index";

export default function EventsList() {
  return (
    <div>
      <EventCard
        image={Images.founder1}
        heading="Event One"
        content="This is the description for event one."
        side="left"
      />
      <EventCard
        image={Images.founder2}
        heading="Event Two"
        content="This is the description for event two."
        side="right"
      />
    </div>
  );
}
