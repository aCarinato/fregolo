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
        <div className={classes.top}></div>
        <div className={classes.main}>
          <div className={classes.TL}>
            <img className={classes.image} src="img/penguin.png" />
          </div>
          <div className={classes.TC}></div>
          <div className={classes.TR}>
            <img className={classes.image} src="img/cane.jpg" />
          </div>
          <div className={classes.CL}></div>
          <div className={classes.CC}>
            <img className={classes.image} src="img/smallfregola.jpg" />
          </div>
          <div className={classes.CR}></div>
          <div className={classes.BL}>
            <img className={classes.image} src="img/uovo.png" />
          </div>
          <div className={classes.BC}></div>
          <div className={classes.BR}>
            <img className={classes.image} src="img/froglegs.png" />
          </div>
        </div>
        <div className={classes.bottom}></div>
      </div>
    </Modal>
  );
}

export default Popup;
