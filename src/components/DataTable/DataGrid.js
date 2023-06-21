import { useState } from 'react';
import DataTable from 'react-data-table-component';
import classes from './DataGrid.module.css';
import './DataGrid.css';
import NewItemForm from '../NewItemForm/NewItemForm';

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
]
    const rowsPerPageOptions = [4, 8, 12, 16];

    function DataGrid() {

    const [datas, setDatas] = useState(data);
    const [showForm, setShowForm] = useState(false);
    const [enteredObject, setEnteredObject] = useState('');

    const handleButtonClick = () => setShowForm(true);
    const handleClose = () => setShowForm(false);

    const objectInputChangeHandler = (event) => {
        setEnteredObject(event.target.value);
      };

    const saveValues = ({ link, name, description }) => {
        setDatas(oldData => ([...oldData, { id: Math.random() * 99999, link, name, description }]))
    }

    return (
        <div className='container'>
            <div className={classes.dataGridBody}>
                <div className={classes.dataGridBodySub}>
                    <div>
                        <input value={enteredObject} onChange={objectInputChangeHandler} className={classes.dataGridBodyInput} type='text' name='name' placeholder='Search objects...' />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                    <button onClick={handleButtonClick} className={classes.dataGridBodyButton}>
                        + Yeni Hesap Ekle
                    </button>
                </div>
                <NewItemForm show={showForm} saveValues={saveValues} handleClose={handleClose} />
                <DataTable
                    columns={columns}
                    data={datas.filter((item) => {
                        if (enteredObject === " ") {
                          return item;
                        } else if (
                          item.name.toLowerCase().includes(enteredObject.toLowerCase())
                        ) {
                          return item;
                        }
                      })}
                    responsive
                    pagination
                    highlightOnHover
                    persistTableHead
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