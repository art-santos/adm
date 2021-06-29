import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditPlanContext from '../../../Context/EditPlanContext';
import axios from 'axios';

export default function AlertDialog() {

  const {showDelete, setShowDelete, id} = useContext(EditPlanContext)

  const handleClose = () => {
    setShowDelete(false);
  };

  async function handleDelete(e){
    const res = await axios.delete(`/api/plans/${id}`)
    res.status
    window.location.reload()
  }

  return (
      <Dialog
        open={showDelete}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">{"Do you really want to delete this plan?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" size="large">
            NO
          </Button>
          <Button onClick={handleDelete} color="secondary" size="small" autoFocus>
            YES!
          </Button>
        </DialogActions>
      </Dialog>
  );
}