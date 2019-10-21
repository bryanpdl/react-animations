import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import './styles.css';

const element = <h1 className="text">Drag the box.</h1>;

const Box = posed.div({
    draggable: true,
    drag: { scale: 1.2 },
    dragEnd: { scale: 0.5 },
    pressable: true,
    init: {
        scale: 1, outlineWidth: '0px',
        outlineOffset: '0px',
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    press: { scale: 2, delay: 50 },
    hoverable: true,
    hover: {
        scale: 1.2,
        boxShadow: '0px 44px 163px rgba(0, 0, 0, 0.38)'
    },
   
});










const Example = () => <Box  className="box" />;





const rootElement = document.getElementById('root');
ReactDOM.render([<Example />, element], rootElement);

