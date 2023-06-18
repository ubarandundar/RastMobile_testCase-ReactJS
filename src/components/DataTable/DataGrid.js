import { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from 'react-data-table-component';
import classes from './DataGrid.module.css';
import './DataGrid.css';
import NewItemForm from '../NewItemForm/NewItemForm';

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
        {
            id: 5,
            link: 'instagram.com/mobilerast/',
            name: 'instagram',
            description: 'We will help you to finish your development project successfully.',
        },
        {
            id: 6,
            link: 'tr.linkedin.com/company/rastmobile',
            name: 'linkedin',
            description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
        },
        {
            id: 7,
            link: 'behance.net/rastmobile',
            name: 'behance',
            description: 'Software Development Agency Rast Mobile Information Technology Ltd.',
        },
        {
            id: 8,
            link: 'twitter.com/rastmobile',
            name: 'twitter ',
            description: 'Software Development Agency Rast Mobile Information Technology Ltd.',
        }
    ]

    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = data.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

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

    const rowsPerPageOptions = [4,8,12,16];

    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
      };

    const [datas, setDatas] = useState(data);

  return (
    <div className='container'>
        <div className={classes.dataGridBody}>
            <button onClick={handleButtonClick} className={classes.dataGridBodyButton}>
                + Yeni Hesap Ekle
            </button>
            {showForm && <NewItemForm />}
            <DataTable
            columns={columns}
            data={filteredItems}
            responsive
            pagination
            highlightOnHover
            // subHeader
            persistTableHead
            paginationResetDefaultPage={resetPaginationToggle}
            subHeaderComponent={subHeaderComponentMemo}
            paginationPerPage={4}
            paginationRowsPerPageOptions={rowsPerPageOptions}
            striped
            wrap
            />
        </div>
    </div>
  )
}

export default DataGrid;