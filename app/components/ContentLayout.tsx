import React from "react";
import Card from "./Card";
function ContentLayout({ ...data }) {
  const { section } = data;
  switch (section) {
    case "about": {
      return (
        <div className="h-full  slide-into-view flex flex-col mx-12 justify-center items-center">
          <p className="text-pretty leading-8">{data?.description}</p>
        </div>
      );
    }
  }
  return <div>{JSON.stringify(data)}</div>;
}

export default ContentLayout;
