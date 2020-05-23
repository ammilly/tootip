const POSITION = {
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
    BOTTOM: 'bottom'
};

const TRIGGER = {
    HOVER: 'hover',
    CLICK: 'click',
    FOCUS: 'focus'
}

const ALL_HANDLERS = [
    'onClick',
    'onMouseDown',
    'onTouchStart',
    'onMouseEnter',
    'onMouseLeave',
    'onFocus',
    'onBlur',
    'onContextMenu',
];

const AJUSTMENT = 20;

export {
    POSITION,
    TRIGGER,
    ALL_HANDLERS,
    AJUSTMENT
};
