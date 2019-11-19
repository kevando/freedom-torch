import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import * as d3 from "d3";

import makeData from "./makeData";
// import readData from './read-data';
import { dataUrls } from "../../data";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </>
  );
}

function SenateTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Full Name",
        accessor: "full_name"
      }
      // {
      //   Header: "Last Name",
      //   accessor: "lastName"
      // },
      // {
      //   Header: "Age",
      //   accessor: "age"
      // },
      // {
      //   Header: "Visits",
      //   accessor: "visits"
      // },
      // {
      //   Header: "Status",
      //   accessor: "status"
      // },
      // {
      //   Header: "Profile Progress",
      //   accessor: "progress"
      // }
    ],
    []
  );

  const [data, setData] = useState([]);

  console.log("data", data);
  function processData(tsvData) {
    console.log("tsv", tsvData);
    setData(tsvData);
  }

  useEffect(() => {
    d3.tsv(dataUrls.senate).then(processData);
  }, []);

  if (!data.length) {
    return null;
  }
  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default SenateTable;
