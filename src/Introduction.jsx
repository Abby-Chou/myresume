import styles from "./inedex.module.css";
export default function Introduction() {
  return (
    <div>
      <header>
        <article className={styles.border}>
          <h1>Introduction</h1>
          <div>
            <p>
              ✋Hi,I am Abby Chou,28 years old. I'm a sales person with about 5
              years of experience.
            </p>
            <p>
              I can speak three languages including,Mandarin Chinese,English,and
              Japanese.
            </p>
            <p>I am currently studying programing starting from web design.</p>
            <p>Feel free to contact me for any suggestions.</p>
          </div>
        </article>
      </header>
    </div>
  );
}
