import BoardMembers from "../components/Boardmembers";
import Footer from "../components/Footer";
import Head from "next/head";
import Index from "../components/Index";
import Vision from "../components/Vision";
export default function Home() {
  return (
    <div>
      <Head>
        <title>GDSC VIT Chennai</title>
        <meta name="description" content="GDSC VIT Chennai" />
        <link rel="icon" href="gdsc.png" />
      </Head>
      <Index />
      <div className="mx-auto md:max-w-4xl lg:max-w-7xl ">
        <Vision />
        <BoardMembers />
        <Footer />
      </div>
    </div>
  );
}
