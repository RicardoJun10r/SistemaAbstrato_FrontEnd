import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModalDeletarTransacao from "../Modal/modalDeletarTransacao";

const TabelaTransacao = () => {

    const [ transacao, setTransacao ] = useState();

    const [ deleteModal, setDeleteModal ] = useState(false);

    const handleDeleteModalOpen = () => setDeleteModal(true);

    const handleDeleteModalClose = () => setDeleteModal(false);

    function DeletarTransacao(e) {
        setTransacao(e)
        handleDeleteModalOpen();
    }

    const columns = [
        { field: 'id', headerName: 'ID', description: 'O id da transação', width: 150 },
        { 
            field: 'value', headerName: 'Valor', type: 'number', description: 'O valor da tranação', width: 150,
            valueFormatter: (params) => {
                if (params.value == null) {
                return 'R$ 0';
                }
                return `R$ ${params.value.toLocaleString()}`;
            },
        },
        { 
            field: 'discount', headerName: 'Desconto', type: 'number', description: 'O desconto da transação', width: 150,
            valueFormatter: (params) => {
                if (params.value == null) {
                return '0%';
                }
                return `${params.value.toLocaleString()}%`;
            },
        },
        { field: 'customer', headerName: 'Comprador', description: 'O nome do comprador', sortable: false, width: 150 },
        { field: 'cart', headerName: 'Carrinho', description: 'O id do carrinho', sortable: false, width: 150 },
        { field: 'login', headerName: 'Vendedor', description: 'O nome do vendedor', sortable: false, width: 150 },
        { 
            field: 'data', headerName: 'Data', type: 'date', description: 'Data da transação', sortable: false, width: 150,
            valueGetter: ({ value }) => value && new Date(value),
        },
        {
            field: 'Deletar', description: 'Deletar transação', sortable: false, width: 200, renderCell: (params) => {
            return <Button onClick={() => DeletarTransacao(params.row.value)} endIcon={<DeleteIcon />} color="error" variant="outlined">{`Deletar`}</Button>
            }
        },
    ];

    const rows = [
        { id: 1, value: 100, discount: 0, customer: "Alexandre", cart: "(84)99999-9999", login: "Rogerio", data: "05/12/2023" },
        { id: 2, value: 100, discount: 0, customer: "Alexandre", cart: "(84)99999-9999", login: "Rogerio", data: "05/12/2023" },
        { id: 3, value: 100, discount: 0, customer: "Alexandre", cart: "(84)99999-9999", login: "Rogerio", data: "05/12/2023" },
        { id: 4, value: 100, discount: 0, customer: "Alexandre", cart: "(84)99999-9999", login: "Rogerio", data: "05/12/2023" },
        { id: 5, value: 100, discount: 0, customer: "Alexandre", cart: "(84)99999-9999", login: "Rogerio", data: "05/12/2023" },
        { id: 6, value: 100, discount: 0, customer: "Alexandre", cart: "(84)99999-9999", login: "Rogerio", data: "05/12/2023" },
        { id: 7, value: 100, discount: 0, customer: "Alexandre", cart: "(84)99999-9999", login: "Rogerio", data: "05/12/2023" },
        { id: 8, value: 100, discount: 150, customer: "Alexandre", cart: "(84)99999-9999", login: "Rogerio", data: "05/12/2023" },
        { id: 9, value: 100, discount: 0, customer: "Alexandre", cart: "(84)99999-9999", login: "Rogerio", data: "05/12/2023" },
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
        {deleteModal === 'false' ? null : <ModalDeletarTransacao transacao={transacao} open={deleteModal} handleClose={handleDeleteModalClose} />}
        </div>
    )
}

export default TabelaTransacao;