import VerticalLine from "./VerticalLine";
import styles from "./styles.module.scss";

export default function DoubleVerticalLine() {
  return (
    <div className={styles.root__doubleLine}>
      <VerticalLine />
      <VerticalLine />
    </div>
  );
}
