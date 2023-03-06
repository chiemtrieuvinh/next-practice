import Link from "next/link";
import Image from "next/image";
import Head from "next/head"; // add meta data
import Script from "next/script"; // optimize script tag to add third party
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
        {/**
             * strategy controls when the third-party script should load. 
             * A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time

             onLoad is used to run any JavaScript code immediately after the script has finished loading.
              In this example, we log a message to the console that mentions that the script has loaded correctly
             */}
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>This is my first post</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
      <Image
        src="/images/profile.jpg"
        width={500}
        height={500}
        alt="image profile"
      />
    </Layout>
  );
}
