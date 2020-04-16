import { useRouter } from 'next/router'
import BaseLayout from '../../components/BaseLayout'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

export default function Post(props) {
  // const router = useRouter();
  const { show = {} } = props
  const summary = show.summary && show.summary.replace(/<[/]?(p|b)>/g, '')
  const image = show.image && show.image.medium;

  return (
    <BaseLayout>
      <Head>
        <title>{show.name} - Detail Page</title>
        <meta name="description" content={summary}/>
      </Head>

      <h1>{show.name}</h1>
      <p>{summary}</p>
      <img src={image} />

    </BaseLayout>
  )
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};