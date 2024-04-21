
import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Grid, Flex, Badge, Link } from '@chakra-ui/react';
import { Cat } from '@/types';
import { useCats } from '@/hooks';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const CatGallery: React.FC = () => {
  const {data: cats, isFetching, isLoading, refetch }  = useCats();

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {cats?.map(cat => (
        <Box borderWidth={'1px'} key={cat.id} boxShadow="md" p="6" rounded="md" bg="white">
          <Image borderRadius="md" src={cat.url} alt={`Cat - ${cat.breeds[0]?.name || 'Unknown'}`} />
          <Flex align="baseline" mt={2}>
            <Badge colorScheme="pink">
              {cat.breeds[0]?.origin}
            </Badge>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="pink.800"
            >
              {cat.breeds[0]?.name || 'Unknown'}
            </Text>
          </Flex>
          <Text mb={4} mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {cat.breeds[0]?.temperament || 'Unknown'}
          </Text> 
          <Link mt={2} href={cat.breeds[0]?.wikipedia_url} isExternal>More informations on Wikipedia <ExternalLinkIcon/></Link>
        </Box>
      ))}
    </Grid>
  );
};

export default CatGallery;