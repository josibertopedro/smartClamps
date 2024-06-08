import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Reports/relatorios.css'
import { useEffect } from 'react';
import { db } from '../../services/firebaseConfig.js'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer.jsx';
import LinkIcon from '@mui/icons-material/Link';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

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

function Tabela1({data}) {

  const columns = [
    { name: "profissionaisResp", label: "Profissionais Responsáveis" },
    { name: "especialidade", label: "Especialidade"  },
    { name: "situacao", label: "Situação" },
    { name: "data", label: "Data" },
  ];

  const options = {
    selectableRows: 'none',
  };

  const filteredData = data.map(item => ({
    profissionaisResp: item.profissionaisResp,
    especialidade: item.especialidade,
    situacao: item.situacao,
    data: item.data ? new Date(item.data.seconds * 1000).toLocaleDateString() : '',
  }));

  return (
    <MUIDataTable
      title={"Procedimentos"}
      data={filteredData}
      columns={columns}
      options={options}
    />
  );
}

function Tabela2({data}) {

  const navigate = useNavigate();

  const columns = [
    { name: "instituicao", label: "Instituição"},
    { name: "profissionalResp", label: "Profissionais Responsáveis" },
    { name: "inconformidade", label:"Inconformidade" },
    { name: "data", label:"Data"},
    { name: "situacao", label:"Situação"  },
    {
      name: "",
      filter: false,
      sort: false,
      empty: true,
      options: {
        customBodyRender: (value, tableMeta) => {
          const id = tableMeta.rowIndex;
          return (
            <IconButton onClick={() => navigate(`/procedimento/`)}>
              <LinkIcon />
            </IconButton>
          );
        },
      },
    },
  ];

  const filteredData2 = data.map(item => ({
    profissionalResp: item.profissionalResp,
    inconformidade: item.inconformidade,
    instituicao: item.instituicao,
    situacao: item.situacao,
    data: item.data ? new Date(item.data.seconds * 1000).toLocaleDateString() : '',
  }));

  const options = {
    selectableRows: 'none',
  };

  return (
    <MUIDataTable
      title={"Inconformidades"}
      data={filteredData2}
      columns={columns}
      options={options}
    />
  );
}

function Relatorios() {
  const [showTabela, setShowTabela] = useState(1);
  const [procedimentos, setProcedimentos] = useState([])
  const [inconformidade, setInconformidade] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const querySnapshot = await getDocs(collection(db, 'procedimentos'))
      const docsData = querySnapshot.docs.map(doc => doc.data())
      setProcedimentos(docsData)
    }
    const fetchData2 = async() => {
      const querySnapshot = await getDocs(collection(db, "inconformidades"))
      const docsData = querySnapshot.docs.map(doc => doc.data())
      setInconformidade(docsData)
    }
    fetchData2()
    fetchData()
  }, [])

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
      <HeaderContainer />
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
        {showTabela === 1 ? <Tabela1 data={procedimentos} /> : <Tabela2 data={inconformidade} />}
      </div>
      </div>
    </ThemeProvider>
  );
}

export default Relatorios;
