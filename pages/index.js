/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import { getSortedNotesData } from '../lib/api';
import Link from 'next/link';

export default ({ allNotes }) => {
  return (
    <Container>
      <ul>
        {allNotes.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
            <br />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export async function getStaticProps() {
  const allNotes = getSortedNotesData();
  return {
    props: { allNotes },
  };
}
