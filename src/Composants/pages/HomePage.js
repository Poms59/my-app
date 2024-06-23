import Heading from "../Sections/headingPages/Heading";
import Specials from "../Sections/headingPages/Specials";
import Testimonials from "../Sections/headingPages/Testimonials";
import About from "../Sections/headingPages/About";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
