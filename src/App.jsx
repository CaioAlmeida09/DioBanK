import { useState } from "react";

function App() {
  const [saldo, setSaldo] = useState(0);
  const [valueDeposit, setValueDeposit] = useState(0);
  const [valueSaque, setValueSaque] = useState(0);

  function HandleDeposit() {
    setSaldo(saldo + valueDeposit);
  }

  function HandleSaque() {
    if (saldo < valueSaque) {
      alert("Operação Não Permitida");
      return; // Adicionei um return para evitar que a função prossiga após o alerta
    }
    setSaldo(saldo - valueSaque);
  }

  return (
    <>
      <h1>Olá Name</h1>
      <label>Faça seu depósito</label>
      <button onClick={HandleDeposit}>Depositar</button>
      <input
        type="number"
        onChange={(e) => setValueDeposit(Number(e.target.value))}
      />
      <label>Faça seu saque:</label>
      <input
        type="number"
        onChange={(e) => setValueSaque(Number(e.target.value))}
      />
      <button onClick={HandleSaque}>Sacar</button>
      <section>
        <p>Consulte seu saldo:</p>
        <div>{saldo}</div>
      </section>
    </>
  );
}

export default App;
