import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <Button title="Small" styles="rounded-sm Small" />
      <Button title="Large" styles="rounded-lg Large" />
      <Button title="Fully" styles="rounded-full medium" />
    </div>
  );
};
export default Landing;
