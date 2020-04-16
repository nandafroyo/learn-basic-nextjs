import Navigation from '../components/Navigation'
import Head from 'next/head'

const BaseLayout = (props) => (
    <div>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Homepage - Learn Basic Next.js</title>
        <meta name="description" content="Learn about Basic of Next.js"/>
      </Head>

      <Navigation/>
        {props.children}
      <p>Footer - 2020</p>

      <style jsx global>{`
        body {
          font-family: Sans-Serif;
        }
      `}</style>
    </div>
)

export default BaseLayout;