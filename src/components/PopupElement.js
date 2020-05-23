import React, { useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';

const PopupElement = forwardRef((props, ref) => {
    const { eleStyle, title } = props;

    // const domRef = useRef(null);
    // useImperativeHandle(ref, () => domRef.current);
    // const computePosition = () => {
    //     const domNode = domRef.current,
    //         nodeRect = domNode.getBoundingClientRect();

    //     domNode
    // };

    return (
        <div ref={ref} style={eleStyle} className='tooltip-element'>
            <div  className='tooltip-arrow' key='arrow'></div>
            <div className='tooltip-inner' key='content' role='tooltip'>
                {title}
            </div>
        </div>
    );
});

PopupElement.propTypes = {
    title: PropTypes.node,
    arrowStyle: PropTypes.object,
    innerStyle: PropTypes.object
};

PopupElement.defaultProps = {
    title: 'This is a tooltip text'
};

export default PopupElement;
