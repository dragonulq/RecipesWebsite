import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/HeaderOption.css';
import {forwardRef, useRef} from "react";
import MyPopover from "@/src/app/components/MyPopover";

const addItemsToGrid = (optionsPopover, grid) => {
    const headerOptionName = Object.keys(optionsPopover)[0];
    const columns = optionsPopover[headerOptionName];
    let maxRowLen = 0;
    for(let i = 0;i < columns.length;i++) {
        const gridItem = document.createElement('h4');
        gridItem.classList.add('grid-item');
        const columnTitle = Object.keys(columns[i])[0];
        maxRowLen = Math.max(maxRowLen, columns[i][columnTitle].length);
        gridItem.textContent = columnTitle;
        grid.appendChild(gridItem);
    }

    for(let j = 0;j < maxRowLen;j++) {
        for(let i = 0;i < columns.length;i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            const columnTitle = Object.keys(columns[i])[0];
            if(columns[i][columnTitle].length >= j + 1) {
                gridItem.textContent = columns[i][columnTitle][j];
            }
            grid.appendChild(gridItem);
        }
    }

};

export default function HeaderOption({ optionName, optionsPopover }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const ref = useRef(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    let columns = optionsPopover[Object.keys(optionsPopover)[0]];
    let columnsLen = columns.length;
    let rowsLen = 0;
    columns.forEach(col => rowsLen = Math.max(rowsLen, col[Object.keys(col)[0]].length));

    React.useEffect(() => {
        if(!open) {
            return undefined;
        }
        setTimeout(() => {
            const current = ref.current;
            if(current === null) {
                return undefined;
            }

            const popoverContainer = current.querySelector(".popover-container");
            if(popoverContainer) {
                popoverContainer.style.gridTemplateColumns = `repeat(${columnsLen}, 1fr)`;
                popoverContainer.style.gridTemplateRows = `repeat(${rowsLen}, 1fr)`;
                addItemsToGrid(optionsPopover, popoverContainer);
            }
        }, 0);

    },[anchorEl]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <Button id="header-option-button"
                aria-describedby={id} variant="text" onClick={handleClick} disableRipple>
                {optionName}
            </Button>
            <MyPopover id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} optionsPopover={optionsPopover} ref={ref} />
        </div>
    );
}