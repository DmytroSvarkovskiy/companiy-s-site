"use client";
import { useState } from "react";
import { InputField } from "@/shared";
import { InputPhone } from "@/shared/index.client";

export default function Home() {
  const [value, onChange] = useState("");
  return (
    <section className=" min-h-[1800px]  bg-background text-foreground section container">
      <InputPhone onChange={onChange} value={value} />
      {/* <InputField /> */}
    </section>
  );
}
