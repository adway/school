/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import { getAllNotes } from '../lib/api';
import Link from 'next/link';

export default ({ allNotes }) => {
  const notes = allNotes;

  return (
    <Container>
      {notes.length > 0 &&
        notes.map((note) => (
          <Box key={note.slug} sx={{ color: 'blue' }}>
            <Link
              as={`/notes/${note.slug}`}
              href='/notes/[slug]'
              sx={{ color: 'blue' }}
            >
              <a>{note.title ? note.title : 'No Title'}</a>
            </Link>
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
