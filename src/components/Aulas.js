import { useState } from 'react';

function Aulas({onAulas}) {
  return (
      <button className = "btn" onClick={onAulas}> Aulas </button>
  );
}

export default Aulas;
