import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home({ navigation }) {
  return (
    <>
      <Navbar buttonType={false} navigation={navigation} />
      <Card />
    </>
  );
}
