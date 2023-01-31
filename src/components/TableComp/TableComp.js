import React from 'react';
import './TableComp.css';

import fakeData from '../../../data/data.js';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less'; // or 'rsuite-table/dist/css/rsuite-table.css'

export default function TableComp() {
  // data is empty initially
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // We load data after first render
    setData(fakeData);
  }, []);

  const handleScroll = (x, y) => {
    // This should print 200 under normal conditions
    console.log(data.length);
  };

  return (
    <Table
      height={400}
      data={data}
      onScroll={handleScroll}
      cellBordered
      onRowClick={(data) => {
        console.log(data);
      }}
    >
      <Column width={70} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130} fixed>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={130}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={200}>
        <HeaderCell>City</HeaderCell>
        <Cell dataKey="city" />
      </Column>

      <Column width={200}>
        <HeaderCell>Street</HeaderCell>
        <Cell dataKey="street" />
      </Column>

      <Column width={200}>
        <HeaderCell>Company</HeaderCell>
        <Cell dataKey="company" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={200} fixed="right">
        <HeaderCell>Action</HeaderCell>

        <Cell>
          {(rowData) => {
            function handleAction() {
              alert(`id:${rowData.id}`);
            }
            return (
              <span>
                <a onClick={handleAction}> Edit </a> | <a onClick={handleAction}> Remove </a>
              </span>
            );
          }}
        </Cell>
      </Column>
    </Table>
  );
}
