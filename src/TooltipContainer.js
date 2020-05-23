import React from 'react';
import Tooltip from './components/Tooltip';
import { POSITION, TRIGGER } from './Constants';

function TooltipContainer() {
  const leftTipProps = {
    position: POSITION.LEFT,
    title: <span>This is a tooltip showing to the left.</span>,
    trigger: TRIGGER.HOVER
  },
  rightTipProps = {
    position: POSITION.RIGHT,
    title: <span>This is a tooltip showing to the right.</span>,
    trigger: TRIGGER.HOVER
  },
  topTipProps = {
    position: POSITION.TOP,
    title: <span>This is a tooltip showing to the top.</span>,
    trigger: TRIGGER.HOVER
  },
  bottomTipProps = {
    position: POSITION.BOTTOM,
    title: <span>This is a tooltip showing to the bottom.</span>,
    trigger: TRIGGER.HOVER
  };

  return (
    <div className='container'>
        <Tooltip {...topTipProps}>
            <a href='#' className='alink'>Top</a>
        </Tooltip>
        <Tooltip {...rightTipProps}>
            <a href='#' className='alink'>Right</a>
        </Tooltip>
        <Tooltip {...bottomTipProps}>
            <a href='#' className='alink'>Bottom</a>
        </Tooltip>
        <Tooltip {...leftTipProps}>
            <a href='#' className='alink'>Left</a>
        </Tooltip>
    </div>
  );
}

export default TooltipContainer;
