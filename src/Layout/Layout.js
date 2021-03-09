import Head from 'next/head'
import Nav from './Nav'
import Copyright from './Copyright'

export default function Layout({
  children,
  title = 'Coffee helps me code',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav>
        </Nav>
      </header>

      {children}

      <Copyright></Copyright>
    </div>
  )
}