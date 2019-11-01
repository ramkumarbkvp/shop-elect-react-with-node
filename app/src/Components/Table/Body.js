import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const renderCells = (headers, row) => {
    return headers.map((head, index) => (
        <TableCell key={index} align="left">
            {head.link
                ? <span className="app-link">{row[head.key]}</span>
                : row[head.key]
            }
        </TableCell>
    ));
};

const Body = ({
    hoverKey,
    headers,
    rowData,
    selectAll = false,
    isSelected,
    handleClick,
}) => {
    return (
        <TableBody>
            {rowData.map((row, index) => {
                const isItemSelected = isSelected(row[hoverKey]);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                    <TableRow
                        hover
                        key={index}
                        onClick={event => handleClick(event, row[hoverKey])}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        selected={isItemSelected}
                    >
                        {selectAll
                            ? <TableCell padding="checkbox">
                                <Checkbox
                                    checked={isItemSelected}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </TableCell>
                            : null
                        }
                        {renderCells(headers, row)}
                    </TableRow>
                );
            })}
        </TableBody>
    )
}

export default Body;
