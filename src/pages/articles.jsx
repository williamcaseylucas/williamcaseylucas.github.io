import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

// 3:03:00
const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return <h1>Hi</h1>;
};

const articles = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Articles Page</title>
        <meta name="description" content="Any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words can change the word!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <li>Featured Article-1</li>
            <li>Featured Article-2</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
