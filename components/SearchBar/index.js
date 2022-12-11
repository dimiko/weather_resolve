import React, {useState} from 'react'
import { Box, FormControl, Input, Button, FormLabel } from '@chakra-ui/react';

const SearchBar = ({ setCityName }) => {
    const [value, setValue] = useState('');

    const handleCity = (event) => {
        setValue(event.target.value);
    };

    const handleCityWeather = (data) => {
        setCityName(data)
    };

    return <div>

        <Box as={'form'}>
            <FormControl>
                <FormLabel htmlFor="city">
                    Search city
                </FormLabel>
                <Input type="text" name="value" required autoComplete="off" onChange={handleCity} value={value} mb={'20px'} />
                <Button
                    bg={"#eb6e4c"}
                    color={'white'}
                    _hover={{
                        bg: "white",
                        color: '#eb6e4c',
                        border: "1px solid #eb6e4c"
                    }}
                    w={'100%'}
                    onClick={() => handleCityWeather(value)}
                >
                    Search
                </Button>
            </FormControl>
        </Box>
    </div>
};

export default SearchBar;
