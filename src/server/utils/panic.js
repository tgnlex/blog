import process from 'process';

const panic = (err) => {
  console.error(`[PANIC] ${err}`);
  process.exit(1);
}


export { panic };
