import {forwardRef} from "react";
import Popover from "@mui/material/Popover";
import * as React from "react";


const MyPopover = forwardRef((props, ref) => {

    return (
        <Popover
            id={props.id}
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={props.handleClose}
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