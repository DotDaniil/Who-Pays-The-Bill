import React, { useContext }from 'react';

import { MyContext } from '../context';

const Stage2 = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="result_wrapper">
        <h3>За всё платит:</h3>
        <div>{context.state.result}</div>
      </div>
        <div
          className="action_button"
          onClick={() => context.resetGame()}
          >
          НАЧАТЬ СНАЧАЛА
        </div>
        <div
          className="action_button btn_2"
          onClick={() => context.getNewLooser()}
          >
          ВЫБРАТЬ ДРУГОГО
        </div>
    </>
  );
}

export default Stage2;
