import Introduction from "./Introduction";
import Education from "./Education";
import Experience from "./Experience";

export default function Aboutme() {
  return (
    <div>
      <header>
        <Introduction />
      </header>
      <section>
        <Education />
      </section>
      <section>
        <Experience />
      </section>
    </div>
  );
}
