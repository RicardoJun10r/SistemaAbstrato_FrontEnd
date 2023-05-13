import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useEstoque from "../../hooks/useEstoque";
import { Button } from "@mui/material";
import ModalVerProduto from '../Modal/modalVer';
import ModalDeletarProduto from '../Modal/modalDeletarProduto';
import DeleteIcon from '@mui/icons-material/Delete';
import AdsClickIcon from '@mui/icons-material/AdsClick';

const TabelaProdutos = () => {

  const { setProduto } = useEstoque();

  const [ deleteModal, setDeleteModal ] = useState(false);

  const [ visualizarModal, setVisualizarModal ] = useState(false);

  const handleDeleteModalOpen = () => setDeleteModal(true);

  const handleDeleteModalClose = () => setDeleteModal(false);

  const handleVisualizarModalOpen = () => setVisualizarModal(true);

  const handleVisualizarModalClose = () => setVisualizarModal(false);

  function DeletarProduto(e) {
    setProduto(e)
    handleDeleteModalOpen();
  }

  function VisualizarProduto(e) {
    setProduto(e);
    handleVisualizarModalOpen();
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 130 },
    { field: 'descricao', headerName: 'Descrição', width: 130 },
    { field: 'status', headerName: 'Status', type: 'boolean', width: 90 },
    { 
      field: 'custo', headerName: 'Custo', type: 'number', width: 130,
      valueFormatter: (params) => {
        if (params.value == null) {
          return 'R$ 0';
        }
        return `R$ ${params.value.toLocaleString()}`;
      },
    },
    { 
      field: 'preco', headerName: 'Preço', type: 'number', width: 130,
      valueFormatter: (params) => {
        if (params.value == null) {
          return 'R$ 0';
        }
        return `R$ ${params.value.toLocaleString()}`;
      },
    },
    { field: 'marca', headerName: 'Marca', width: 130 },
    { 
      field: 'criado', headerName: 'Criado', type: 'date', width: 130,
      valueGetter: ({ value }) => value && new Date(value),
    },
    {
      field: 'Vizualizar', sortable: false, width: 200, renderCell: (params) => {
        return <Button onClick={() => VisualizarProduto(params.row.nome)} endIcon={<AdsClickIcon />} color="info" variant="outlined">{`Ver ${params.row.nome}`}</Button>
      }
    },
    {
      field: 'Deletar', description: 'Entrar no estoque', sortable: false, width: 200, renderCell: (params) => {
        return <Button onClick={() => DeletarProduto(params.row.nome)} endIcon={<DeleteIcon />} color="error" variant="outlined">{`Deletar ${params.row.nome}`}</Button>
      }
    },
  ];
  
  const rows = [
    { id: 1, descricao: 'Snow', nome: 'Jon', custo: 35, preco: 800, marca: 'Balenciaga', criado: "05/12/2023", status: 0, },
    { id: 2, descricao: 'Lannister', nome: 'Cersei', custo: 42, preco: 800, marca: 'Balenciaga', criado: "05/12/2023", status: 1, },
    { id: 3, descricao: 'Lannister', nome: 'Jaime', custo: 45, preco: 800, marca: 'Balenciaga', criado: "05/12/2023", status: 1, },
    { id: 4, descricao: 'Stark', nome: 'Arya', custo: 16, preco: 800, marca: 'Balenciaga', criado: "05/12/2023", status: 1, },
    { id: 5, descricao: 'Targaryen', nome: 'Daenerys', custo: 50, preco: 800, marca: 'Balenciaga', criado: "05/12/2023", status: 1, },
    { id: 6, descricao: 'Melisandre', nome: 'feijao', custo: 150, preco: 800, marca: 'Balenciaga', criado: "05/12/2023", status: 1, },
    { id: 7, descricao: 'Clifford', nome: 'Ferrara', custo: 44, preco: 800, marca: 'Balenciaga', criado: "05/12/2023", status: 0, },
    { id: 8, descricao: 'Frances', nome: 'Rossini', custo: 36, preco: 800, marca: 'Balenciaga', criado: "05/12/2023", status: 1, },
    { id: 9, descricao: 'Roxie', nome: 'Harvey', custo: 65, preco: 800, marca: 'Balenciaga', criado: "05/12/2023", status: 1, },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
      {deleteModal === 'false' ? null : <ModalDeletarProduto open={deleteModal} handleClose={handleDeleteModalClose} />}
      {visualizarModal === 'false' ? null : <ModalVerProduto open={visualizarModal} handleClose={handleVisualizarModalClose} />}
    </div>
  );
}

export default TabelaProdutos;