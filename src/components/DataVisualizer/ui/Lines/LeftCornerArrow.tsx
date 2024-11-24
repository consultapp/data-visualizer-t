import styles from "./styles.module.scss";
import classNames from "classnames";

export default function LeftCornerArrow({ w100 = false }: { w100?: boolean }) {
  return (
    <div
      className={classNames(
        styles.root__left_arrow,
        w100 && styles.root__arrow_full
      )}
    >
      <div>
        <svg
          width="7"
          height="4"
          viewBox="0 0 7 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z"
            fill="#898290"
          />
        </svg>
      </div>
    </div>
  );
}
