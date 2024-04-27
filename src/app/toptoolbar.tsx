import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import md5 from 'md5'; 
import GoogleAuth from './googleAuth';


const user = {
  isLoggedIn: false, // Set to true to test logged in state
  email: 'user@example.com',
  avatarUrl: `https://www.gravatar.com/avatar/${md5('user@example.com')}?d=mp`
};

function TopToolbar() {
  const avatarBg = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex bg={useColorModeValue('white', 'gray.800')} p={4} boxShadow="sm" alignItems="center" justifyContent="space-between">
      <Box fontSize="2xl" fontWeight="bold">
        Random cats
      </Box>
      <Menu>
      
        <MenuButton as={IconButton} icon={
            <Avatar size="sm" 
                borderRadius={'100%'} 
                src={user.isLoggedIn ? user.avatarUrl : `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp`} 
                bg={avatarBg} />
            } variant="outline" aria-label="Options">
          <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {user.isLoggedIn ? (
            <>
              <MenuItem>Logout</MenuItem>
            </>
          ) : (
            <MenuItem><GoogleAuth/></MenuItem>
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default TopToolbar;