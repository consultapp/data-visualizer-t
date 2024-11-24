import classNames from "classnames";
import styles from "./styles.module.scss";

export default function RightCornerArrow({ w100 = false }: { w100?: boolean }) {
  return (
    <div
      className={classNames(
        styles.root__right_arrow,
        w100 && styles.root__arrow_full
      )}
    >
      <div></div>
    </div>
  );
}
