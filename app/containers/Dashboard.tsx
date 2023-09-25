"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { useStore } from "../store";

export default function Dashboard() {
  const { show } = useStore();
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex h-full">
        <div className={`flex-0 ${show ? "block" : "hidden"}`}>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Content />
        </div>
      </div>
    </div>
  );
}
