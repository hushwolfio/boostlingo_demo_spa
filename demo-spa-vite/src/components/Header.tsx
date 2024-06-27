import { FC, useState, useEffect } from 'react';
import { Button, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import '../text.css';

export const Header: FC = () => {
  const [displayEmail, setDisplayEmail] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const { email } = JSON.parse(currentUser);
      setDisplayEmail(email);
    }
  }, []);

  const handleSignOut = (): void => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <Group justify='space-between' style={{ margin: '10px' }}>
      <div className='gradient-text header'>DEMO SPA</div>
      <Group>
        <Text>{displayEmail}</Text>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </Group>
    </Group>
  );
};
