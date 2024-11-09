import { CopyAll } from '@mui/icons-material';
import React from 'react';
import ShortText from '../ShortText';
import './styles.css';
export default function CopyText(props: any) {
  const { text, label } = props;

  const copy = (event: any) => {
    event.stopPropagation();
    navigator.clipboard.writeText(text);
  };

  return (
    <div onClick={copy} className="copyText">
      <ShortText label={label} text={text} />
      <CopyAll fontSize="small" />
    </div>
  );
}
