import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DragHandle from "@material-ui/icons/DragHandle";
import IconButton from "@material-ui/core/IconButton";

export default function ActionMenu(props) {
  const { onComplete, onRemove, onRename } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = () => {
    onRemove();
  };

  const handleRename = () => {
    onRename();
  };

  const handleComplete = () => {
    onComplete();
  };

  return (
    <div>
      <IconButton
        aria-label="action"
        onClick={handleClick}
        onMouseEnter={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <DragHandle fontSize="small" />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleComplete}>Done/Undone</MenuItem>
        <MenuItem onClick={handleRename}>Rename</MenuItem>
        <MenuItem onClick={handleRemove}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
