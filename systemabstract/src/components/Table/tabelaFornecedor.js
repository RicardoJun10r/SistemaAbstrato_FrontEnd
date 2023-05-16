import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ModalVisualizarModal from '../Modal/modalVerEstoque';
import useFornecedor from "../../hooks/useFornecedor";
import ModalDeletarFornecedor from "../Modal/modalDeletarFornecedor";
import ModalVisualizarFornecedor from "../Modal/modalVerFornecedor";

const TabelaFornecedor = () => {

  const { setFornecedorObj, setIndexContent } = useFornecedor();

  const [ deleteModal, setDeleteModal ] = useState(false);

  const [ visualizarModal, setVisualizarModal ] = useState(false);

  const handleDeleteModalOpen = () => setDeleteModal(true);

  const handleDeleteModalClose = () => setDeleteModal(false);

  const handleVisualizarModalOpen = () => setVisualizarModal(true);

  const handleVisualizarModalClose = () => setVisualizarModal(false);

  function DeletarFornecedor(e) {
    setFornecedorObj(e)
    handleDeleteModalOpen();
  }

  function VisualizarFornecedor(e) {
    setFornecedorObj(e);
    handleVisualizarModalOpen();
  }

  const columns = [
    { field: 'id', headerName: 'ID', description: 'O id do estoque', width: 200 },
    { field: 'name', headerName: 'Nome', description: 'O nome do estoque', width: 200 },
    { field: 'email', headerName: 'E-mail', description: 'A quantidade de produtos nesse estoque', width: 200 },
    { field: 'address', headerName: 'Endereço', description: 'A localização do estoque', sortable: false, width: 200 },
    { field: 'phone', description: 'Telefone', sortable: false, width: 200 },
    {
        field: 'Vizualizar', sortable: false, width: 200, renderCell: (params) => {
          return <Button onClick={() => VisualizarFornecedor(params.row.name)} endIcon={<AdsClickIcon />} color="info" variant="outlined">{`Ver ${params.row.name}`}</Button>
        }
    },
    {
        field: 'Deletar', description: 'Entrar no estoque', sortable: false, width: 200, renderCell: (params) => {
          return <Button onClick={() => DeletarFornecedor(params.row.name)} endIcon={<DeleteIcon />} color="error" variant="outlined">{`Deletar ${params.row.name}`}</Button>
        }
    },
  ];

  const rows = [
    { id: 1, email: "a@a.com", name: 'Jon', address: 'R. antonio Guimarães', phone: "(84)99999-9999" },
    { id: 2, email: "a@a.com", name: 'Cersei', address: 'R. antonio Guimarães', phone: "(84)99999-9999" },
    { id: 3, email: "a@a.com", name: 'Jaime', address: 'R. antonio Guimarães', phone: "(84)99999-9999" },
    { id: 4, email: "a@a.com", name: 'Arya', address: 'R. antonio Guimarães', phone: "(84)99999-9999" },
    { id: 5, email: "a@a.com", name: 'Daenerys', address: 'R. antonio Guimarães', phone: "(84)99999-9999" },
    { id: 6, email: "a@a.com", name: 'Sei la', address: 'R. antonio Guimarães', phone: "(84)99999-9999" },
    { id: 7, email: "a@a.com", name: 'Ferrara', address: 'R. antonio Guimarães', phone: "(84)99999-9999" },
    { id: 8, email: "a@a.com", name: 'Rossini', address: 'R. antonio Guimarães', phone: "(84)99999-9999" },
    { id: 9, email: "a@a.com", name: 'Harvey', address: 'R. antonio Guimarães', phone: "(84)99999-9999" },
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
      {deleteModal === 'false' ? null : <ModalDeletarFornecedor open={deleteModal} handleClose={handleDeleteModalClose} />}
      {visualizarModal === 'false' ? null : <ModalVisualizarFornecedor open={visualizarModal} handleClose={handleVisualizarModalClose} />}
    </div>
  )
}

export default TabelaFornecedor;