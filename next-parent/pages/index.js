import Head from "next/head";
import MicroApp from "plutt-component";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [showReverse, setShowReverse] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>Next/React plutt example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Write your name here:{" "}
        <input onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="checkbox-reverse">
          Show name your in reverse:{" "}
          <input
            id="checkbox-reverse"
            type="checkbox"
            checked={showReverse}
            onChange={(e) => setShowReverse(e.target.checked)}
          />
        </label>
      </div>
      {showReverse && <MicroApp name={name} />}
    </div>
  );
};

export default Home;
