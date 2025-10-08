import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import CardSection from "./components/CardSection";
import Contact from "./components/Contact";

function App() {
  const sections = [
    {
      icon: "building",
      title: "About the Company",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      icon: "globe",
      title: "Our Values",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      icon: "landmark",
      title: "Our Mission",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  return (
    <div>
      <Header />
      {sections.map((section, index) => (
        <CardSection key={index} {...section} />
      ))}
      <Contact />
    </div>
  );
}

export default App;
