import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const notesDirectory = join(process.cwd(), '_notes');

export function getNotesSlugs() {
  return fs.readdirSync(notesDirectory);
}

export function getNotesBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(notesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllNotes(fields = []) {
  const slugs = getNotesSlugs();
  const notes = slugs
    .map((slug) => getNotesBySlug(slug, fields))
    .sort((note1, note2) => (note1.date > note2.date ? '-1' : '1'));

  return notes;
}
