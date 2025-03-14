"use client";
import styles from "./menu.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const tabs = ["Home", "Profile"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const router = useRouter();

  const onClickHandler = (item) => {
    setActiveTab(item);
    console.log(activeTab);
    router.push(`/Eclipse/${activeTab}`);
  };

  return (
    <>
      <div className={styles.tabsList}>
        {tabs.map((item, index) => {
          return (
            <button
              key={index}
              onClick={onClickHandler}
              className={styles.buttons}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}
