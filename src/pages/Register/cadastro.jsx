import React from 'react';
import MUIDataTable from "mui-datatables";


function Cadastro() {

  const options = {
    selectableRows: false
  }
  const data = [
    ["Fulano", "X", "Cardiologista", "2024-04-15"],
    ["Sicrano", "y", "Ortopedista", "2024-04-16"],
    ["Beltrano", "X", "Enfermeiro", "2024-04-17"],
    // Adicione mais linhas conforme necessário
  ];

  const columns = [
    {
      name: "Nome",
      options: {
        filter: true,
      }
    },
    {
      name: "Coren",
      options: {
        filter: true,
      }
    },
    {
      name: "Cargo",
      options: {
        filter: true,
      }
    },
    {
      name: "Data de cadastro",
      options: {
        filter: true,
      }
    },
  ];

  return (
    <MUIDataTable
      title={"Lista de Profissionais"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default Cadastro;
