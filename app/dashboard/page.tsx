import React from "react";
import DashBoard1 from "./dashboard-1/page";
import Dashboard2 from "./dashboard-2/page";

interface Props {
  // Define your component's props here
}

export default function Dashboard(props: Props) {
  return (
    <div>
      <DashBoard1 /> <Dashboard2 />
    </div>
  );
}
