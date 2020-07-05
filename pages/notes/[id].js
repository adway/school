import { getAllNoteIds, getNoteData } from '../../lib/api';
import { Container } from 'theme-ui';

export default function Note({ noteData }) {
  return (
    <Container>
      <h1>{noteData.title}</h1>
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
  const noteData = getNoteData(params.id);
  return {
    props: {
      noteData,
    },
  };
}
