import "@/styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type ApPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
export default function App({ Component, pageProps }: ApPropsWithLayout){

const getLayout = Component.getLayout ?? ((page) => page)
return getLayout(<Component {...pageProps} />)
}
