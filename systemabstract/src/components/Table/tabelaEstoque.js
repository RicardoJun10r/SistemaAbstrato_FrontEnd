import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import useEstoque from "../../hooks/useEstoque";
import ForwardIcon from '@mui/icons-material/Forward';
import DeleteIcon from '@mui/icons-material/Delete';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ModalDeletarEstoque from '../Modal/modalDeletarEstoque';
import ModalVisualizarModal from '../Modal/modalVerEstoque';

const TabelaEstoque = () => {

  const { setEstoque, setIndexContent } = useEstoque();

  const [ deleteModal, setDeleteModal ] = useState(false);

  const [ visualizarModal, setVisualizarModal ] = useState(false);

  const handleDeleteModalOpen = () => setDeleteModal(true);

  const handleDeleteModalClose = () => setDeleteModal(false);

  const handleVisualizarModalOpen = () => setVisualizarModal(true);

  const handleVisualizarModalClose = () => setVisualizarModal(false);

  function CarregarEstoque(e) {
    setEstoque(e)
    setIndexContent(true)
  }

  function DeletarEstoque(e) {
    setEstoque(e)
    handleDeleteModalOpen();
  }

  function VisualizarEstoque(e) {
    setEstoque(e);
    handleVisualizarModalOpen();
  }

  const columns = [
    { field: 'id', headerName: 'ID', description: 'O id do estoque', width: 70 },
    { field: 'nome', headerName: 'Nome', description: 'O nome do estoque', width: 130 },
    { field: 'produtos', headerName: 'Produtos', type: 'number', description: 'A quantidade de produtos nesse estoque', width: 130 },
    { field: 'createdAt', headerName: 'Data de Criação', description: 'A data de criação do estoque', width: 150, },
    { field: 'localizacao', headerName: 'Localização', description: 'A localização do estoque', sortable: false, width: 160 },
    {
      field: 'Entrar', description: 'Entrar no estoque', sortable: false, width: 200, renderCell: (params) => {
        return <Button onClick={() => CarregarEstoque(params.row.id)} endIcon={<ForwardIcon />} variant="text">{`Entrar ${params.row.nome}`}</Button>
      }
    },
    {
      field: 'Deletar', description: 'Entrar no estoque', sortable: false, width: 200, renderCell: (params) => {
        return <Button onClick={() => DeletarEstoque(params.row.nome)} endIcon={<DeleteIcon />} color="error" variant="outlined">{`Deletar ${params.row.nome}`}</Button>
      }
    },
    {
      field: 'Vizualizar', sortable: false, width: 200, renderCell: (params) => {
        return <Button onClick={() => VisualizarEstoque(params.row.nome)} endIcon={<AdsClickIcon />} color="info" variant="outlined">{`Ver ${params.row.nome}`}</Button>
      }
    },
  ];

  const rows = [
    { id: 1, produtos: 35, nome: 'Jon', createdAt: '05/12/2002', localizacao: 'R. antonio Guimarães' },
    { id: 2, produtos: 42, nome: 'Cersei', createdAt: '05/12/2002', localizacao: 'R. antonio Guimarães' },
    { id: 3, produtos: 45, nome: 'Jaime', createdAt: '05/12/2002', localizacao: 'R. antonio Guimarães' },
    { id: 4, produtos: 16, nome: 'Arya', createdAt: '05/12/2002', localizacao: 'R. antonio Guimarães' },
    { id: 5, produtos: 0, nome: 'Daenerys', createdAt: '05/12/2002', localizacao: 'R. antonio Guimarães' },
    { id: 6, produtos: 150, nome: 'Sei la', createdAt: '05/12/2002', localizacao: 'R. antonio Guimarães' },
    { id: 7, produtos: 44, nome: 'Ferrara', createdAt: '05/12/2002', localizacao: 'R. antonio Guimarães' },
    { id: 8, produtos: 36, nome: 'Rossini', createdAt: '05/12/2002', localizacao: 'R. antonio Guimarães' },
    { id: 9, produtos: 65, nome: 'Harvey', createdAt: '05/12/2002', localizacao: 'R. antonio Guimarães' },
  ];


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      {deleteModal === 'false' ? null : <ModalDeletarEstoque open={deleteModal} handleClose={handleDeleteModalClose} />}
      {visualizarModal === 'false' ? null : <ModalVisualizarModal open={visualizarModal} handleClose={handleVisualizarModalClose} />}
    </div>
  )
}

export default TabelaEstoque;