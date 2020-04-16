import BaseLayout from '../components/BaseLayout'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

/*
const PostLink = (p) => (
    <li key="${props.show.id}">
        <Link href="p/[id]" as={`/p/${props.show.id}`} >
            <a> {props.show.name} </a>
        </Link>
    </li>
);
*/

const Blog = (props) => (
    <BaseLayout>
        <Head>
            <title>Blog - Learn Basic Next.js</title>
            <meta name="description" content="Blog Page - Learn about Basic of Next.js"/>
        </Head>

        <h1>Welcome to Blog Page</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="p/[id]" as={`/p/${show.id}`} >
                        <a> {show.name} </a>
                    </Link>
                </li>
            ))}
        </ul>

        <style jsx>{`
            li {
                margin-bottom: 5px;
            }

            li:last-child {
                margin-bottom: 30px;
            }

            a {
                text-decoration: none;
                color: #333333;
            }

            a:visited {
                color: #333333;
            }

            a:hover {
                color: #000000;
            }
        `}</style>
    </BaseLayout>
)

Blog.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`${data.length} data fetched!`)

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Blog;