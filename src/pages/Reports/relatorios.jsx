import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import '../Reports/relatorios.css'

const customTheme = createTheme({
  overrides: {
    MUIDataTableHeadCell: {
      root: {
        color: '#314290', // Altera a cor do texto das células do cabeçalho
        textTransform: 'none', // Impede que o texto seja convertido para maiúsculas
      },
    },
  },
});

function Tabela1() {
  const data = [
    ["João", "Cardiologia", "Ativo", "2024-04-15"],
    ["Maria", "Ortopedia", "Inativo", "2024-04-16"],
    ["Pedro", "Pediatria", "Ativo", "2024-04-17"],
  ];

  const columns = [
    { name: "Profissionais Responsáveis" },
    { name: "Especialidade" },
    { name: "Situação" },
    { name: "Data" },
  ];

  const options = {
    selectableRows: 'none',
  };

  return (
    <MUIDataTable
      title={"Procedimentos"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

function Tabela2() {
  const data = [
    ["A", "Fulano", "Extravio", "2024-05-01", "Ativo"],
    ["B", "Beltrano", "Extravio", "2024-05-02","Inativo"],
    ["C", "Cicrano", "Extravio", "2024-05-03", "Ativo"],
    ["D", "Fulano", "Extravio", "2024-05-01", "Ativo"],
    
  ];

  const columns = [
    { name: "Instituição" },
    { name: "Profissional Responsável" },
    { name: "Inconformidade" },
    { name: "Data" },
    { name: "Situação" },
  ];

  const options = {
    selectableRows: 'none',
  };

  return (
    <MUIDataTable
      title={"Inconformidades"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

function Relatorios() {
  const [showTabela, setShowTabela] = useState(1);

  const getMuiTheme = () => createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
          },
          head: {
            backgroundColor: "#F5F8FF",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#F5F8FF",
            borderLeft: "4px solid #314290",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: '#FFFFFF',
            backgroundColor: '#314290',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              color: '#314290'
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <div className="relatorios-container">
        <h1 className='title-reports'> Relatórios </h1>
      <div className="buttons-reports">
        <button onClick={() => setShowTabela(1)} variant="contained" className={`toggle-button-reports ${showTabela === 1 ? 'active' : ''} `} style={{ marginBottom: '20px' }}>
          PROCEDIMENTOS
        </button>
        <button onClick={() => setShowTabela(2)} variant="contained" className={`toggle-button-reports ${showTabela === 2 ? 'active' : ''} `} style={{ marginBottom: '20px' }}>
          INCONFORMIDADES
        </button>
        </div>
      <div className='table-container'>
        {showTabela === 1 ? <Tabela1 /> : <Tabela2 />}
      </div>
      </div>
    </ThemeProvider>
  );
}

export default Relatorios;
