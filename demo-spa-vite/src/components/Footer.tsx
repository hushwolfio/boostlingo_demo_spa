import { FC } from 'react';
import { Text } from '@mantine/core';

export const Footer: FC = () => (
  <Text c='blue' style={{ margin: '10px' }}>
    Current Date: {new Date().toLocaleDateString()}
  </Text>
);
