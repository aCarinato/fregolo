import classes from './Popup.module.css';
import Modal from './Modal';
import { useState } from 'react';

function Popup({ setShowPopup }) {
  const onClose = () => {
    setShowPopup(false);
  };

  //   const cls = `${classes.container} ${classes['container--blu']}`;

  return (
    <Modal onClose={onClose}>
      <div className={classes.container}>
        <div className={classes.TL}>TL</div>
        <div className={classes.TC}>TC</div>
        <div className={classes.TR}>TR</div>
        <div className={classes.CL}>CL</div>
        <div className={classes.CC}>CC</div>
        <div className={classes.CR}>CR</div>
        <div className={classes.BL}>BL</div>
        <div className={classes.BC}>BC</div>
        <div className={classes.BR}>BR</div>
      </div>
    </Modal>
  );
}

export default Popup;
