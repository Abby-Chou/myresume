import styles from "./list.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function List() {
  return (
    <div>
      <nav>
        <ul className={styles.no}>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100002835005275"
              target="_blank"
            >
              <FaFacebook />
              Facebook
            </a>
          </li>
          <li>
            <a href="mailto:a0939074721@gamil.com">
              <FaEnvelope />
              Gmail
            </a>
          </li>
          <li>
            <FaHome />
            Taipei,Taiwan
          </li>
          <li>
            <FaPhone />
            0939074721
          </li>
        </ul>
      </nav>
    </div>
  );
}
