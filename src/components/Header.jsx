import { HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return <HStack p={'4'} shadow={'base'} bgColor={'black'} spacing={'24px'} >

    <Button variant={'unstyled'} color={'white'} ml={'24px'}>
    <Link to = '/'>Home</Link>
    </Button>
    <Button variant={'unstyled'} color={'white'} ml={'24px'} >
    <Link to = '/exchanges'>Exchanges</Link>
    </Button>
    <Button variant={'unstyled'} color={'white'} ml={'24px'}>
    <Link to = '/coins'>Coins</Link>
    </Button>

  </HStack>
}

export default Header
