import art_exhibition from "./assets/art_exhibition.jpg";
import food_festival from "./assets/food_festival.jpg";
import jazz_night from "./assets/jazz_night.jpg";
import marathon from "./assets/marathon.jpg";
import rock_concert from "./assets/rock_concert.jpg";
import tech_conference from "./assets/tech_conference.jpg";
import boston_map from "./assets/boston_map.jpeg";
import newyorkmap from "./assets/newyorkmap.jpeg";
import chicagomap from "./assets/chicagomap.jpeg";
import neworleansmap from "./assets/neworleansmap.jpeg";
import sanfranmap from "./assets/sanfranmap.jpeg";
import seattlemap from "./assets/seattlemap.jpeg";

const events = [
    {
      id: 1,
      title: "Rock Concert",
      description: "Experience an epic night of rock music performances.",
      date: "2025-06-15",
      location: "New York City",
      price: 75,
      thumbnail: rock_concert,
      image: newyorkmap
    },
    {
      id: 2,
      title: "Art Exhibition",
      description: "Explore the latest modern art installations from around the world.",
      date: "2025-07-02",
      location: "San Francisco",
      price: 40,
      thumbnail: art_exhibition,
      image: sanfranmap
    },
    {
      id: 3,
      title: "Food Festival",
      description: "Taste dishes from over 50 international cuisines.",
      date: "2025-08-20",
      location: "Chicago",
      price: 30,
      thumbnail: food_festival,
      image: chicagomap
    },
    {
      id: 4,
      title: "Marathon 2025",
      description: "Join thousands of runners in this annual marathon event.",
      date: "2025-09-10",
      location: "Boston",
      price: 20,
      thumbnail: marathon,
      image: boston_map
    },
    {
      id: 5,
      title: "Tech Conference",
      description: "Attend keynotes and workshops by leading tech experts.",
      date: "2025-10-05",
      location: "Seattle",
      price: 120,
      thumbnail: tech_conference,
      image: seattlemap
    },
    {
      id: 6,
      title: "Jazz Night",
      description: "Enjoy a night of smooth jazz performances in an intimate setting.",
      date: "2025-11-18",
      location: "New Orleans",
      price: 55,
      thumbnail: jazz_night,
      image: neworleansmap
    }
  ];
   
  export default events;