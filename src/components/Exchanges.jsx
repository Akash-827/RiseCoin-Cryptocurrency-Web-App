import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent.jsx'

function Exchanges() {

  const [exchanges, setExchanges] = useState([]);
  const [Loading, setLoading] = useState([true]);
  const [error, setError] = useState(false);
  
useEffect(() => {

  const fetchExchange = async () => {
   try {
     const {data} = await axios.get(`${server}/exchanges`)

    setExchanges(data);
    setLoading(false)
   } catch (error) {
    setError(true)
    setLoading(false)
   }
  };
  fetchExchange();
},[]);

if(error) return <ErrorComponent message= {'Error While Fetching Exchanges'} />;

  return (
    <Container maxW={'container.xl'}>

    { Loading ? <Loader /> : <>
    
    <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
      {
        exchanges.map((i) => (
          <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
        ))
      }
    </HStack>
    
    </>
}

    </Container>
  )
}

const ExchangeCard = ({name,img,rank,url}) => (
  <a href={url} target='blank'>
    <VStack width={"52"} p={'4'} shadow={'lg'} borderRadius={'lg'} transition={'all 0.3s'} m={'4'} css={{ "&:hover" : {transform: 'scale(1.1)'}}}>

    <Image src={img} h={'10'} w={'10'} objectFit={'contain'}></Image>

    <Heading size={'md'} noOfLines={1}>{rank}</Heading>
    <Text>{name}</Text>

    </VStack>
  </a>
)

export default Exchanges