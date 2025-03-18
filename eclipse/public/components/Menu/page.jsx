"use client";
import styles from "./menu.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const tabs = ["Home","Posts", "Profile"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const router = useRouter();

  const onClickHandler = (item) => {
    setActiveTab(item);
    console.log(item);
    if (item === "Home"){
      router.push("/Eclipse")
    }
    else{
      router.push(`/Eclipse/${item}`);
    }
  };

  return (
    <>
      <div className={styles.tabsList}>
        {tabs.map((item, index) => {
          return (
            <button
              key={index}
              onClick={()=> onClickHandler(item)}
              className={`${styles.buttons} ${activeTab === item ? styles.active : ""}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}
