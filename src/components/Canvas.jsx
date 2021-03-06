import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import useCanvas from './../hooks/useCanvas';
import Button from './Button';

const CanvasEl = styled.canvas`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 888;
`;

const CanvasComponent = memo(({ canvasRef }) => <CanvasEl ref={canvasRef} />);

const Canvas = () => {
  const { setRef, activeObject, changeFill } = useCanvas();
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [buttonCoords, setButtonCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (activeObject) {
      const { top, left } = activeObject;
      setIsButtonVisible(true);
      setButtonCoords({
        top: `${top}px`,
        left: `${left}px`,
      });
    } else {
      setIsButtonVisible(false);
    }
  }, [activeObject]);

  return (
    <>
      <CanvasComponent canvasRef={setRef} />
      <Button
        visible={isButtonVisible}
        onClick={changeFill}
        coords={buttonCoords}
        label="Change color"
      />
    </>
  );
};

export default Canvas;
