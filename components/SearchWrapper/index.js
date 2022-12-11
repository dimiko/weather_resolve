import React, from 'react'
import {Box, Button, Flex} from '@chakra-ui/react';
import SearchBar from "../SearchBar";
import useCities from "../../hooks/useCities";
import useName from "../../hooks/useName";

const SearchWrapper = ({ setCityName, cityName, setCityCoordinates }) => {
    const {cities} = useCities(cityName ? cityName : null)
    const { nameData } = useName(cityName ? cityName : ' ')

    return (
        <Box pt={'40px'}>
            <SearchBar cityName={cityName} setCityName={setCityName} />
            <Box py={'60px'} >
                <Box direction={'column'}>
                    {
                        nameData ?
                            nameData?.map((city, index) => {
                                return (
                                    <Box key={index} display={'inline-block'} mr={'15px'}>
                                        <Button mb={'15px'} w={'350px'}  onClick={() => {setCityCoordinates(city)}} display={'flex'} justifyContent={'space-between'}>
                                            <Box pr={'12px'}>{'State: '}{city?.state?.length > 5 ? `${city?.state.substring(5, 0)}...` : city?.state }</Box>
                                            <Box pr={'12px'}>{city?.name?.length > 15 ? `${city?.name.substring(15, 0)}...` : city?.name} - {city?.country}</Box>
                                        </Button>
                                    </Box>
                                )
                            }) : null
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default SearchWrapper;

