import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const Header = ({
    headers,
    order,
    orderBy,
    numSelected,
    rowCount,
    selectAll = false,
    onSelectAllClick
}) => {
    return (
        <TableHead>
            <TableRow>
                {selectAll
                    ? <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{ 'aria-label': 'select all desserts' }}
                        />
                    </TableCell>
                    : null
                }
                {headers.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <span className='table-header'>{headCell.label}</span>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default Header;
