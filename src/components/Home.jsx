import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/kanchanara-9pCV2MB65y8-unsplash.jpg'


const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'} >

<Image src={img} w={'full'} h={'full'} objectFit={'cover'} filter={'grayscale(1)'} opacity={'0.5'}/>
<Text
fontSize={'6xl'}
textAlign={'center'}
fontWeight={'bold'}
color={'white'}
mt={'-100'}
>
Coin Rise
</Text>

    </Box>
  )
}

export default Home