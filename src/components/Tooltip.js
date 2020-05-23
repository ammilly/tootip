import React, { forwardRef, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { POSITION, TRIGGER, AJUSTMENT } from '../Constants';
import PopupElement from './PopupElement';
import './tooltip.css'

const Tooltip = forwardRef((props, ref) => {
    const {
        position = 'top',
        title,
        mouseEnterDelay = 0.2,
        mouseLeaveDelay = 0.2,
        children
    } = props;

    const triggerRef = useRef(null),
        tipRef = useRef(null);
    const [visible, setVisible] = useState(false);

    
    const popupEleProps = {
        ref: tipRef,
        title: title,
        eleStyle: {}
    };

    const onMouseEnter = () => {
        setTimeout(() => {
            setVisible(true);
            compute();
        }, mouseEnterDelay * 1000);
    };

    const onMouseLeave = () => {
        setTimeout(() => {
            setVisible(false);
        }, mouseLeaveDelay * 1000);
    };

    const newChildProps = {
        key: 'trigger',
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
    };

    const triggerEle = React.cloneElement(children, newChildProps);

    const compute = () => {
        const triggerEleRect = triggerRef.current.getBoundingClientRect(),
            tipRect = tipRef.current.getBoundingClientRect(),
            POS = position.toLowerCase();
        let left = 0, top = 0;
        if(POS.indexOf(POSITION.TOP) >= 0) {
            left = -(parseInt(tipRect.width/2) - parseInt(triggerEleRect.width/2));
            top = -(triggerEleRect.height + AJUSTMENT * 2);
        }
        if(POS.indexOf(POSITION.RIGHT) >= 0) {
            left = triggerEleRect.width;
            top = -(parseInt(triggerEleRect.height/2) + AJUSTMENT);
        }
        if(POS.indexOf(POSITION.LEFT) >= 0) {
            left = -tipRect.width;
            top = -(parseInt(triggerEleRect.height/2) + AJUSTMENT);
        }
        if(POS.indexOf(POSITION.BOTTOM) >= 0) {
            left =  -(parseInt(tipRect.width/2) - parseInt(triggerEleRect.width/2));
        }

        let transformVal = `translate(${left}px, ${top}px)`;
        tipRef.current.style.transition = `${transformVal} ${mouseEnterDelay}`;
        tipRef.current.style.transform = transformVal;
    };

    return (
        <div className='tooltip'>
            <div className='trigger-element' ref={triggerRef}>
                {triggerEle}
            </div>
            { visible && <PopupElement {...popupEleProps} />}
        </div>
    );
});

Tooltip.propTypes = {
    position: PropTypes.oneOf(Object.values(POSITION)),
    trigger: PropTypes.oneOf(Object.values(TRIGGER)),
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    title: PropTypes.node
};

Tooltip.defaultProps = {
    position: POSITION.TOP,
    trigger: TRIGGER.HOVER
};

export default Tooltip;
