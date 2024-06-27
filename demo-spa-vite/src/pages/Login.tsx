import { useEffect, useState, FC } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Button,
  Center,
  TextInput,
  PasswordInput,
  Container,
  Text,
  Card,
  Space,
  Flex,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import '../text.css';

export const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const [visible, { toggle }] = useDisclosure(false);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const { isAuthenticated } = JSON.parse(currentUser);
      if (isAuthenticated) {
        navigate('/home');
      }
    }
  }, [navigate]);

  const handleLogin = (): void => {
    if (email && password) {
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ email, password, isAuthenticated: true })
      );
      navigate('/home');
    }
  };

  const onEmailChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      style={{ height: '100vh', width: '100vw' }}
    >
      <Container size='lg' style={{ width: 500 }}>
        <Card shadow='md' padding='lg'>
          <Center>
            <div className='gradient-text title'>DEMO SPA</div>
          </Center>
          <Space h='md' />
          <Text>Welcome to demo spa</Text>
          <Space h='md' />
          <TextInput
            label='Email'
            placeholder='Enter your email'
            value={email}
            onChange={onEmailChange}
            required
          />
          <Space h='sm' />
          <PasswordInput
            label='Password'
            placeholder='Enter your password'
            type='password'
            value={password}
            visible={visible}
            onChange={onPasswordChange}
            onVisibilityChange={toggle}
            required
          />
          <Space h='md' />
          <Button onClick={handleLogin} disabled={!email && !password}>
            Login
          </Button>
        </Card>
      </Container>
    </Flex>
  );
};
