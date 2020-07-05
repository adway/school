import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const notesDirectory = path.join(process.cwd(), '_notes');

export function getSortedNotesData() {
  const fileNames = fs.readdirSync(notesDirectory);

  // take a bunch of file names, and have a function that uses the file name to grab and export information about the file with the corresponding file name

  const allNotesData = fileNames.map((fileName) => {
    const id = fileName.replace(/.md$/, '');

    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    // Combine and export
    return {
      id,
      ...matterResult.data,
    };
  });
  return allNotesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllNoteIds() {
  const fileNames = fs.readdirSync(notesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getNoteData(id) {
  const fullPath = path.join(notesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
}
