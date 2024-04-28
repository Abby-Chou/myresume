import styles from "./inedex.module.css";
export default function Experience() {
  return (
    <div>
      <section className={styles.border}>
        <h1>Experience</h1>
        <ul>
          <li>
            Sales assistant,Shang Ho Industory that is merged by Hu Lane
            Associate Inc. 2 years.(2020-2022)
          </li>
          <li>Sales,Calcomp Electronics 2 years(2022-2024)</li>
        </ul>
        <nav>
          <p>
            <a href="https://www.hulane.com.tw/" target="_blank">
              <img src="hulane.jpg" alt="Hu Lane" className={styles.comp} />
            </a>
            <a href="https://www.calcomp.co.th/zh-TW/" target="_blank">
              <img src="calcomp.png" alt="Calcomp" className={styles.comp} />
            </a>
          </p>
        </nav>
      </section>
    </div>
  );
}
