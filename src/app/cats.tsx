import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Grid, Flex, Badge, Link, useToast, Spinner } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Cat } from '@/types';
import { useCats } from '@/hooks';
import { useInView } from 'react-intersection-observer';

const CatGallery: React.FC = () => {
  const [page, setPage] = useState(0);
  const { ref, inView } = useInView({threshold: 0.5});
  const { data: cats, isFetching, isLoading } = useCats(page);
  const toast = useToast();

  useEffect(() => {
    if (inView && !isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, isFetching]);

  return (
    <Grid  templateColumns={{
        base: "repeat(1, 1fr)", // 1 column on small screens
        sm: "repeat(2, 1fr)",   // 2 columns on medium screens
        md: "repeat(3, 1fr)"   // 3 columns on large screens
      }}
      gap={6}>
      {cats?.map((cat, index) => (
        <Box borderWidth="1px" key={cat.id} boxShadow="md" p="6" rounded="md" bg="white">
          <Image borderRadius="md" src={cat.url} alt={`Cat - ${cat.breeds[0]?.name || 'Unknown'}`} />
          <Flex align="baseline" mt={2}>
            <Badge colorScheme="pink">{cat.breeds[0]?.origin}</Badge>
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
          <Link mt={2} href={cat.breeds[0]?.wikipedia_url} isExternal>
            More information on Wikipedia <ExternalLinkIcon mx="2px" />
          </Link>
          {index === cats.length - 1 && <div ref={ref} />} {/* Intersection Observer hook */}
        </Box>
      ))}
      {(isLoading || isFetching) && (
        <Flex width="100%" height="30vh" align="center" justify="center">
          <Spinner size="xl" />
        </Flex>
      )}
    </Grid>
  );
};

export default CatGallery;