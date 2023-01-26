import Layout from "@/components/layout";
import Tag from "@/components/Tag";
import { WidthContext } from "@/lib/context/useContext";
import React, { useContext, useEffect } from "react";
export default function Home() {
  const { setIsExpanded, isExpanded } = useContext(WidthContext);
  useEffect(() => {
    console.log("mounted");
  }, []);

  const makeRequest = async () => {
    const apikey = "2837e21094054b3ab5a05fea2c2b8c15";
    const url = "https://api.football-data.org/v4/competitions/CL/scorers";
  };

  return (
    <Layout>
      <div className=" h-screen w-full ">
        <div
          onClick={() => setIsExpanded(false)}
          className="   h-full w-full bg-slate-100 pt-36 pl-40"
        >
          <Tag width="32" height="32" />
        </div>
      </div>
    </Layout>
  );
}
