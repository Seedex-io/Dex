import React, { useEffect } from 'react';
import './styles.css';
export default function Score(props: any) {
  const { score, name } = props;
  const [color, setColor] = React.useState('green');
  useEffect(() => {
    setColor(score >= 80 ? 'green' : score <= 40 ? 'red' : 'blue');
  }, [score]);

  return (
    <div className="circle">
      <svg width="150px" height="150px">
        <circle cx="70" cy="70" r="70"></circle>
        <circle
          id="circle-stroke"
          cx="70"
          cy="70"
          r="70"
          style={{
            stroke: `url(#${color}grad)`,
            strokeDashoffset: 440 - (440 * score) / 100,
          }}
        ></circle>
        <defs>
          <linearGradient id="bluegrad">
            <stop id="stop1" offset="0%" stopColor="#2DCCE2" />
            <stop id="stop2" offset="100%" stopColor="#0074E0" />
          </linearGradient>
          <linearGradient id="greengrad">
            <stop id="stop1" offset="0%" stopColor="#51E22D" />
            <stop id="stop2" offset="100%" stopColor="#00E08F" />
          </linearGradient>
          <linearGradient id="redgrad">
            <stop id="stop1" offset="0%" stopColor="#F11111" />
            <stop id="stop2" offset="100%" stopColor="#DC00E0" />
          </linearGradient>
        </defs>
      </svg>
      <div className={`number ${color}-grad-text`}>{score}</div>
      <div className="score-subtitle text-muted">{name} score</div>
    </div>
  );
}
