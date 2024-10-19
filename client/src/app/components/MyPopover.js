import {forwardRef, useCallback, useImperativeHandle} from "react";
import Popover from "@mui/material/Popover";
import * as React from "react";


const MyPopover = forwardRef((props, ref) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const exposedSetAnchorEl = useCallback((value) => {
        setAnchorEl(value);

        console.log("Ran exposed setter");
    }, []);

    const getPopoverOpen = useCallback(() => {
        return open;
    }, [open]);

    useImperativeHandle(ref, () => {
       return {
           exposedSetAnchorEl,
           getPopoverOpen
       };
    });
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => {}}
            ref={ref}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <div className="popover-container">


            </div>
        </Popover>
    );
});

export default MyPopover;