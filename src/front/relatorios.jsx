import React from 'react';
import MUIDataTable from "mui-datatables";

export default function Relatorios() {

  const options = {
    selectableRows: false
  }
  const data = [
    ["João", "Cardiologia", "Ativo", "2024-04-15"],
    ["Maria", "Ortopedia", "Inativo", "2024-04-16"],
    ["Pedro", "Pediatria", "Ativo", "2024-04-17"],
    // Adicione mais linhas conforme necessário
  ];

  const columns = [
    {
      name: "Profissionais Responsáveis",
      options: {
        filter: true,
      }
    },
    {
      name: "Especialidade",
      options: {
        filter: true,
      }
    },
    {
      name: "Situação",
      options: {
        filter: true,
      }
    },
    {
      name: "Data",
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
      options={{options}}
    />
  );
}
