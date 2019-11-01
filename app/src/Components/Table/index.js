import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import Header from './Header';
import TableBody from './Body';

export default class TableComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: []
        }
    }

    handleClick = (event, key) => {
        const selected = [...this.state.selected];
        const selectedIndex = selected.indexOf(key);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, key);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        this.setState({ selected: newSelected });
    };

    isSelected = key => this.state.selected.indexOf(key) !== -1;

    onSelectAllClick = (event) => {
        const { rowData, hoverKey } = this.props;
        if (event.target.checked) {
            const newSelected = rowData.map(n => n[hoverKey]);
            this.setState({ selected: newSelected });
        } else {
            this.setState({ selected: [] });
        }
    };

    render() {
        const { headers, rowData, hoverKey, selectAll } = this.props;
        const { selected } = this.state;
        return (
            <div className={'root'}>
                <Paper className={'paper'}>
                    <Table
                        aria-labelledby="tableTitle"
                        size={'medium'}
                        aria-label="enhanced table"
                        className={'table'}
                    >
                        <Header
                            numSelected={selected.length}
                            rowCount={rowData.length}
                            selectAll={selectAll}
                            headers={headers}
                            onSelectAllClick={this.onSelectAllClick} />
                        <TableBody
                            hoverKey={hoverKey}
                            selectAll={selectAll}
                            headers={headers}
                            rowData={rowData}
                            isSelected={this.isSelected}
                            handleClick={this.handleClick} />
                    </Table>
                </Paper>
            </div>
        )
    }
};
