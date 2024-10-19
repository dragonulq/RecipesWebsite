import * as React from 'react';
import {useRef} from 'react';
import Button from '@mui/material/Button';
import '../styles/HeaderOption.css';
import MyPopover from "@/src/app/components/MyPopover";
import debounce from "lodash/debounce";

export default function HeaderOption({optionName, optionsPopover}) {
    const [mouseOnButton, setMouseOnButton] = React.useState(false);
    const [mouseOnPopover, setMouseOnPopover] = React.useState(false);
    const ref = useRef(null);
    const popoverRef = useRef(null);
    const mouseOnButtonRef = useRef(false);

    let columns = optionsPopover[Object.keys(optionsPopover)[0]];
    let columnsLen = columns.length;
    let rowsLen= 0;
    columns.forEach(col => rowsLen = Math.max(rowsLen, col[Object.keys(col)[0]].length));
    rowsLen++; // account for titles row

    // React.useEffect(() => {
    //     if (!open) {
    //         return undefined;
    //     }
    //     console.log("running effect");
    //     setTimeout(() => {
    //         const current = ref.current;
    //         if (current === null) {
    //             return undefined;
    //         }
    //
    //         const popoverContainer = current.querySelector(".popover-container");
    //         if (popoverContainer) {
    //
    //             popoverContainer.style.gridTemplateColumns = `repeat(${columnsLen}, 1fr)`;
    //             popoverContainer.style.gridTemplateRows = `repeat(${rowsLen}, 1fr)`;
    //             addItemsToGrid(optionsPopover, popoverContainer);
    //         }
    //     }, 0);
    //
    // }, [anchorEl]);


    const handleClose = () => {
        setAnchorEl(null);
        setMouseOnButton(false);
    };

    const debounceClosePopover = debounce(() => {
        console.log("debouncing");
        setMouseOnButton(false);
    }, 200);

    const handleOnMouseEnter = (event) => {
        popoverRef.current.exposedSetAnchorEl(event.currentTarget);
    };

    ///get sibling node in popover to be able to access it and just move anchor EL in Popover such that when
    // I set anchorEL it doesnt trigger a button rerender but you can still set Anchor El properly

// idk about above, but: move anchor el into popover and expose with useImperativeHandle callbacks that
    // manipulate anchor el

    const handleOnMouseLeave = () => {
        popoverRef.current.exposedSetAnchorEl(null);
    };

    const handleOnMouseEnterContainer = () => {
      console.log("233");
    };


    return (
        <div className="header-option-container" onMouseEnter={handleOnMouseEnterContainer}>
            <Button className="header-option-button"
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                    variant="text"
                    disableRipple>
                {optionName}
            </Button>
            <MyPopover handleClose={handleClose}
                       optionsPopover={optionsPopover} ref={popoverRef}
            />
        </div>
    );
}

/*This can be rewritten to generate a gridTemplateAreas property instead
* Might do it later*/
const addItemsToGrid = (optionsPopover, grid) => {
    const headerOptionName = Object.keys(optionsPopover)[0];
    const columns = optionsPopover[headerOptionName];
    let maxRowLen = 0;
    for (let i = 0; i < columns.length; i++) {
        const gridItem = document.createElement('h4');
        gridItem.classList.add('grid-item');
        const columnTitle = Object.keys(columns[i])[0];
        maxRowLen = Math.max(maxRowLen, columns[i][columnTitle].length);
        gridItem.textContent = columnTitle;
        grid.appendChild(gridItem);
    }

    for (let j = 0; j < maxRowLen; j++) {
        for (let i = 0; i < columns.length; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            const columnTitle = Object.keys(columns[i])[0];
            if (columns[i][columnTitle].length >= j + 1) {
                gridItem.textContent = columns[i][columnTitle][j];
            }
            grid.appendChild(gridItem);
        }
    }

};