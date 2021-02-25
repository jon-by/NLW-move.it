import "../styles/global.css";
import { ChallengeProvider } from "../contexts/ChallengeContext";
import { CountdownProvider } from "../contexts/CountdownContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengeProvider>
  );
}

export default MyApp;
