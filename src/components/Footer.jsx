import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px="4">
          <Heading
            size="m"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates!
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Your Email here!"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            video hub
          </Heading>
          <Text>All Rights Reserved!!</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            social media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://github.com/deyrahul123/myproject2">Github</a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://www.linkedin.com/in/rahul-dey-87b31b12a/">
              LinkedIn
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
