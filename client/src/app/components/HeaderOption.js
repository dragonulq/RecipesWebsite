import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/HeaderOption.css';
import {forwardRef, useRef} from "react";
import MyPopover from "@/src/app/components/MyPopover";

export default function HeaderOption({ optionName, optionsPopover }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const ref = useRef(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    let columns = Object.keys(optionsPopover).length;
    let rows = 0;
    for(const key in optionsPopover) {
        rows = Math.max(rows, optionsPopover[key].length);
    }

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
                popoverContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
                popoverContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
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