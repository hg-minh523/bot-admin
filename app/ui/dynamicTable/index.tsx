const DynamicTable = ({data, columns}: {data: any, columns: any}) => {
  return (
    <table className="table-auto w-full border-spacing-2">
      <thead className="border-b-2">
        <tr>
          {columns.map((column:any) => (
            <th
              key={column.key}
              className="font-semibold text-sm text-left pb-1"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((data:any) => (
          <tr key={data.key} className="border-b-2 pb-2">
            {columns.map((column:any) => (
              <>
                {Object.keys(data).includes(column.dataIndex) ? (
                  <td className="font-medium text-sm py-3">
                    {data[column.dataIndex]}
                  </td>
                ) : (
                  ""
                )}
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
