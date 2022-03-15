import * as React from 'react';
import { DefaultProgressBar } from "./styles";
import { ProgressBarProps } from './types';

const ProgressBar:React.FC<ProgressBarProps> = ({
  variant,
  progress,
  height,
  maxWidth
}) => {
  return (
    <DefaultProgressBar variant={variant} progress={progress} height={height} maxWidth={maxWidth}/>
  )
}

export default ProgressBar;