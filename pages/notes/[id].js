import { getAllNoteIds, getNoteData } from '../../lib/api';
import { Container } from 'theme-ui';
import Head from 'next/head';

export default function Note({ noteData }) {
  return (
    <Container>
      <Head>
        <title>Hello</title>
      </Head>
      <h1>{noteData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllNoteIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const noteData = await getNoteData(params.id);
  return {
    props: {
      noteData,
    },
  };
}
