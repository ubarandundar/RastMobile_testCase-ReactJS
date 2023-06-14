import DataTable from 'react-data-table-component';

function DataGrid() {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

  return (
    <div>
        <DataTable
            columns={columns}
            data={data}
            selectableRows
            responsive={true}
        />
    </div>
  )
}

export default DataGrid;