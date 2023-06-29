import React from 'react'
import { VStack, Image, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const CoinCard = ({id, name,img, symbol, price, currencySymbol}) => {
  return (
   
      <Link to={`/coins/${id}`} >
        <VStack p={'4'} width={"52"} shadow={'lg'} borderRadius={'lg'} transition={'all 0.3s'} m={'4'} css={{ "&:hover" : {transform: 'scale(1.1)'}}}>
    
        <Image src={img} h={'10'} w={'10'} objectFit={'contain'}></Image>
    
        <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
        <Text>{name}</Text>
        <Text>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    
        </VStack>
      </Link>
    
  )
}

export default CoinCard