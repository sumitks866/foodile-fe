import "@/styles/globals.css";
import "styles/ExpandableSearch.css";
import type { AppProps } from "next/app";
import Store from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}
