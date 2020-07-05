import { getAllNoteIds, getNoteData } from '../../lib/api';
import { Container } from 'theme-ui';

export default function Note() {
  return (
    <Container>
      <h1>Hello</h1>
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
}
