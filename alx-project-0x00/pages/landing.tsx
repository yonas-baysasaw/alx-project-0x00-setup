import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Small"
        styles="text-sm rounded-sm bg-blue-500 text-white"
      />
      <Button
        title="Medium"
        styles="text-base rounded-md bg-green-500 text-white"
      />
      <Button title="Large" styles="text-lg rounded-lg bg-red-500 text-white" />{" "}
      <Button
        title="xLarge"
        styles="text-lg rounded-full bg-red-500 text-white"
      />
    </div>
  );
};
export default Landing;
