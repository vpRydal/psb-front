import React, {
  FC, memo, useEffect, useState,
} from 'react';

import Text from '@ui/_misc/text';

export interface DotLoaderProps {

}
const DotLoader: FC<DotLoaderProps> = () => {
  const [dots, setDots] = useState([null]);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      if (dots.length === 3) {
        setDots([null]);
      } else {
        setDots([...dots, null]);
      }
    }, 250);

    return () => {
      clearInterval(intervalID);
    };
  }, [dots.length]);

  return (
    <Text>
      {dots.map(() => '.').join(' ')}
    </Text>
  );
};

export default memo(DotLoader);
