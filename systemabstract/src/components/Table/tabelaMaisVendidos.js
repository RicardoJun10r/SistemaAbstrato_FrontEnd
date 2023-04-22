import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(nome, quantidadeVendida, restante, preco) {
  return { nome, quantidadeVendida, restante, preco };
}

const rows = [
  createData('Frozen yoghurt', 15, 10, 21.6),
  createData('Ice cream sandwich', 12, 4, 37.7),
  createData('Eclair', 5, 61, 24.4),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Quantidade vendida</TableCell>
            <TableCell align="right">Restante em estoque</TableCell>
            <TableCell align="right">Preço&nbsp;(R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.quantidadeVendida}</TableCell>
              <TableCell align="right">{row.restante}</TableCell>
              <TableCell align="right">{row.preco}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}