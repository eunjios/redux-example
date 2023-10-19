import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  Mode,
  selectMode,
  themeActions,
} from '../store/theme';
import {
  LIGHT_MODE,
  DARK_MODE,
  BLUE_MODE,
} from '../store/theme';

const ChangeMode: React.FC = () => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  const changeModeHandler = (mode: Mode) => {
    dispatch(themeActions.setMode(mode));
  };

  return (
    <>
      <div>
        <button
          onClick={() => changeModeHandler(LIGHT_MODE)}
        >
          Light Mode
        </button>
        <button
          onClick={() => changeModeHandler(DARK_MODE)}
        >
          Dark Mode
        </button>
        <button
          onClick={() => changeModeHandler(BLUE_MODE)}
        >
          Blue Mode
        </button>
      </div>
      <div>{`MODE: ${mode}`}</div>
    </>
  );
};

export default ChangeMode;
