

function panic(err?: Error) {
  if (!err) { console.error('Currently panicking...')}
  console.error('[PANIC]', err);
  return err;  
}

export default panic;



