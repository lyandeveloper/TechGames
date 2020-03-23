import React from 'react';
import propTypes from 'prop-types';

const styles = {
  wrapper: {
    position: 'absolute',
    width: '100%',
    zIndex: '100',
    bottom: '225px',
    textAlign: 'center',
  },
  btn: {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'absolute',
    bottom: '0',
    font: '16px/30px sans-serif',
    color: 'rgb(170, 82, 179)',
  },
  left: {
    left: '0',
  },
  right: {
    right: '0',
  },
};

export default function Buttons(props) {
  const prevBtnStyle = Object.assign({}, styles.btn, styles.left);
  const nextBtnStyle = Object.assign({}, styles.btn, styles.right);
  const { index, total, loop, prevHandler, nextHandler } = props;
  return (
    <div style={styles.wrapper}>
      {(loop || index !== 0) && (
        <div style={prevBtnStyle} onClick={prevHandler}>
          ◀
        </div>
      )}
      {(loop || index !== total - 1) && (
        <div style={nextBtnStyle} onClick={nextHandler}>
          ▶
        </div>
      )}
    </div>
  );
}

Buttons.propTypes = {
  index: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  prevHandler: propTypes.func,
  nextHandler: propTypes.func,
};
