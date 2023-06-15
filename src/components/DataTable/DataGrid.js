import { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from 'react-data-table-component';
import classes from './DataGrid.module.css';
import './DataGrid.css';

function DataGrid() {
    const columns = [
        {
            name: 'Sosyal Medya Linki',
            selector: row => row.link,
            sortable: true,
        },
        {
            name: 'Sosyal Medya Adı',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Açıklama',
            selector: row => row.description,
            sortable: false,
        },
    ];
    
    const data = [
        {
            id: 1,
            link: 'instagram.com/mobilerast/',
            name: 'instagram',
            description: 'We will help you to finish your development project successfully.',
        },
        {
            id: 2,
            link: 'tr.linkedin.com/company/rastmobile',
            name: 'linkedin',
            description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
        },
        {
            id: 3,
            link: 'behance.net/rastmobile',
            name: 'behance',
            description: 'Software Development Agency Rast Mobile Information Technology Ltd.',
        },
        {
            id: 4,
            link: 'twitter.com/rastmobile',
            name: 'twitter ',
            description: 'Software Development Agency Rast Mobile Information Technology Ltd.',
        },
    ]

    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	// const filteredItems = fakeUsers.filter(
	// 	item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	// );

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

  return (
    <div className='container'>
        <div className={classes.dataGridBody}>
            <DataTable
            columns={columns}
            data={data}
            responsive
            pagination
            highlightOnHover
            paginationResetDefaultPage={resetPaginationToggle}
            subHeaderComponent={subHeaderComponentMemo}
            />
        </div>
    </div>
  )
}

export default DataGrid;