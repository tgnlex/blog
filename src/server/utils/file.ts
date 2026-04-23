import panic from './panic.ts';
import fs from 'fs';

const UTF = 'utf8'

function read(uri: string) {
  const data = fs.readFile(uri, UTF, (err, data) => {
    if (err) panic(err);
  });
  return data;
};

export { read };
