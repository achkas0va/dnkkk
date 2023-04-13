import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div onClick={(пше ) => {alert('привет')}}>ybybyb</div>
      <div>xbxbxb</div>
      <Component {...pageProps} />
    </Layout>
    )
}
