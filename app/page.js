
import Footer from "./components/footer";
import Grid from "./components/grid";
import Header from "./components/header";
import SubHeader from "./components/subheader";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Header/>
      <SubHeader/>
      <Grid/>
      <Footer/>
    </main>
  );
}
