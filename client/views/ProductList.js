import { Fragment } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home({ route, navigation }) {
  return (
    <Fragment>
      <Navbar buttonType={false} navigation={navigation} />
      <Card navigation={navigation} category={route.params.category} />
      <Footer />
    </Fragment>
  );
}
