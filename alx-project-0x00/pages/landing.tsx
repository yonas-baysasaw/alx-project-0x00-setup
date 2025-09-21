import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small" styles="text-sm rounded-sm  border" />
      <Button title="Medium" styles="text-base rounded-md bor border" />
      <Button title="Large" styles="text-lg rounded-lg  border" />{" "}
      <Button title="xLarge" styles="text-lg rounded-full  border" />
    </div>
  );
};
export default Landing;
