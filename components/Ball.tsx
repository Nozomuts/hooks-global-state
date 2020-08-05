const Ball = () => {
  return (
    <svg height='22' width='22' viewBox='-1 -1 22 22'>
      <circle
        r='10'
        cx='10'
        cy='10'
        fill='white'
        stroke='black'
        strokeWidth='1'
      />
      <circle r='10' cx='10' cy='10' fill='white' />
      <circle
        r='5'
        cx='10'
        cy='10'
        fill='transparent'
        stroke='red'
        strokeWidth='10'
        strokeDasharray='calc(50*31.4/100) 31.4'
        transform='rotate(180) translate(-20 -20)'
      />
      <rect x='0' y='9.5' width='20' height='1.5' />
      <circle r='4' cx='10' cy='10' fill='black' />
      <circle r='3.25' cx='10' cy='10' fill='white' />
      <circle
        r='2'
        cx='10'
        cy='10'
        fill='white'
        stroke='black'
        strokeWidth='0.5'
      />
    </svg>
  );
};

export default Ball;
