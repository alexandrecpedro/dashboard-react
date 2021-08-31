import { useState, useEffect } from 'react';

function PageHeading() {
  const [contaClick, setContaClick] = useState(0);
  const [appName, setAppName] = useState('Client Panel');

  useEffect(() => {
    console.log('Entrei no componente');
  }, [appName])

  function alterarContador() {
    setContaClick(contaClick + 1);
    setAppName('Infinite Dashboard');
  }

  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      <button onClick={alterarContador}>{contaClick}</button>
    </div>
  );
}

export default PageHeading;
