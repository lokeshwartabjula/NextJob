"use client";

import { Autocomplete, Stack, TextField } from "@mui/material";
import { ICity, ICountry, IState } from "./types";
import { City, Country, State } from "country-state-city";
import { useState } from "react";

export const RegionSelect = () => {

  const countries: ICountry[] = Country.getAllCountries().map((country) => {
    return { name: country.name, isoCode: country.isoCode };
  });

  const [city, setCity] = useState<ICity[]>([]);
  const [state, setState] = useState<IState[]>([]);


  const hanldleCountryChange = (value: ICountry[]) => {
    var states: IState[] = [];
    value.forEach((country) => {
      states.push(
        ...State.getStatesOfCountry(country.isoCode).map((state) => {
          return {
            name: state.name,
            isoCode: state.isoCode,
            isoCountryCode: state.countryCode,
          };
        })
      );
    });
    setState(states);
  };

  const handleStateChange = (value: IState[]) => {
    var cities: ICity[] = [];
    value.forEach((state) => {
      cities.push(
        ...City.getCitiesOfState(state.isoCountryCode, state.isoCode).map(
          (city) => {
            return {
              name: city.name,
              isoStateCode: city.stateCode,
              isoCountryCode: city.countryCode,
            };
          }
        )
      );
    });
    setCity(cities);
  };

  return (
    <Stack spacing={3}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={countries}
        getOptionLabel={(option: ICountry) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label="Countries" placeholder="Countries" />
        )}
        onChange={(_, value) => {
          hanldleCountryChange(value);
        }}
      />

      <Autocomplete
        multiple
        disabled={state.length === 0}
        id="tags-outlined"
        options={state}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="States/Provinces"
            placeholder="States/Provinces"
          />
        )}
        onChange={(_, value) => {
          handleStateChange(value);
        }}
      />
      <Autocomplete
        multiple
        disabled={city.length === 0}
        id="tags-outlined"
        options={city}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label="Cities" placeholder="Cities" />
        )}
      />
    </Stack>
  );
};
