"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const tabs = ["Home", "Profile"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const router = useRouter();

  const onClickHandler = (item) => {
    console.log(item);
    router.push("");
  };
  useEffect(() => {}, []);
  return (
    <>
      {tabs.map((item, index) => {
        return (
          <button key={index} onClick={onClickHandler}>
            {item}
          </button>
        );
      })}
    </>
  );
}
