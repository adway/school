import { Container, Box } from 'theme-ui';
import { getAllNotes } from '../lib/api';

export default ({ allNotes }) => {
  const notes = allNotes;

  return (
    <Container>
      {notes.length > 0 &&
        notes.map((note) => (
          <Box key={note.slug}>
            <p>Hello, world</p>
          </Box>
        ))}
    </Container>
  );
};

export async function getStaticProps() {
  const allNotes = getAllNotes(['title', 'date', 'slug', 'author']);

  return {
    props: { allNotes },
  };
}
