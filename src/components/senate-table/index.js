import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import * as d3 from "d3";

import { dataUrls } from "../../data";

import { numberWithCommas } from "../../lib/helpers";

import "./table.scss";

function cellRenderer({ cell }) {
  const val = cell.value;
  console.log(cell)

  if (["Population","Tweets","Friends","Followers"].includes(cell.column.Header)) {
    return numberWithCommas(val);
  }

  return val;
}

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
      data,
      initialState: {
        sortBy: [
          {
            id: 'state',
            desc: false,
          }
        ]
      },
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
                        ? "🔽"
                        : "🔼"
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
                    <td
                      {...cell.getCellProps({
                        className: cell.column.className,
                        // style: {color: 'red'}
                      })}
                    >
                      {cell.render(cellRenderer)}
                    </td>
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
      },
      {
        Header: "State",
        accessor: "state"
      },
      {
        Header: "Population",
        accessor: "state_population",
        className: "number",
      },
      {
        Header: "Followers",
        accessor: "followers_count",
        className: "number",
      },
      {
        Header: "Friends",
        accessor: "friends_count",
        className: "number",
      },
      {
        Header: "Tweets",
        accessor: "statuses_count",
        className: "number",
      },
      {
        Header: "Twitter Age",
        accessor: "twitter_age",
        className: "number",
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  function processData(tsvData) {
    setData(tsvData);
  }

  useEffect(() => {
    d3.tsv(dataUrls.senate).then(processData);
  }, []);

  if (!data.length) {
    return null;
  }
  return (
    <div className="table">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default SenateTable;
