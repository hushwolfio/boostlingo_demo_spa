import { FC, useEffect, useState } from 'react';
import {
  Button,
  Center,
  Container,
  Image,
  Space,
  Stack,
  Text,
} from '@mantine/core';
0;

export const Content: FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async (): Promise<void> => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setImageUrl(data.message);
  };

  return (
    <Container>
      <Stack>
        <Container>
          <Image
            src={imageUrl}
            fallbackSrc='/loading.jpg'
            alt='Random Dog'
            h={800}
            fit='contain'
          />
        </Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Space h='md' />
        <Center>
          <Button onClick={fetchImage} style={{ width: 120 }}>
            Next image
          </Button>
        </Center>
      </Stack>
    </Container>
  );
};
