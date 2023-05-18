import React, { useState, useEffect } from 'react';
import { TextInput, Select, Button, createStyles, Title, Text, CloseButton, Input, NumberInput } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {

    display: "flex",
    alignItems: "center",
    padding: "20px",
    borderRadius: theme.radius.md,
    backgroundColor: "#FFFFFF",
    border: "1px solid #EAEBED",
    borderRadius: "12px",
    // width: "315px",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: "5px",
    },
  },

  body: {

    // paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: "5px",
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      // padding: "5px",
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "20px",
    color: "#232134",
    marginBottom: "25px",
    // marginLeft: "9px",
    marginTop: "-7px",
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  gridSimple: {
    display: "flex", justifyContent: "space-between",
    [`@media (max-width:  880px)`]: {
      display: "block",
    },

  },

  reset: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    /* identical to box height, or 143% */
    marginTop: "18px",
    display: "flex",
    alignItems: "center",

    /* Grey 500 */

    color: "#ACADB9",
  },

  inputPlace: {
    height: "42px",
    width: "275px",

    // background: "#FFFFFF",
    /* Grey 300 */

    border: "1px solid #D5D6DC",
    borderRadius: "8px"
  },

  help: {
    padding: 0,
    display: "flex",
    justifyContent: "center", height: "360px"
  },

  button: {
    width: "275px",
    height: "40px",

    /* Blue Main 500 */

    background: "#5E96FC",
    borderRadius: "8px",
    color: "#FFF",
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "14px"
  },

  vacanciesList: {
    padding: 0,
    width: "54vw",
    // gridColumn: '2',
    [`@media (max-width:  ${theme.breakpoints.md}px)`]: {
      width: "90%",
      gridColumn: '2',
    },
    [`@media (max-width:  ${theme.breakpoints.sm}px)`]: {
      width: "90%",
      gridColumn: '1'
    },

    [`@media (max-width:  580px)`]: {
      width: "320px",
    },


  },


}
))

function FilterPanel({ parameter, onParameterChange }) {
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleApplyFilters = () => {
    // Apply filters to the data
  };

  const handleResetFilters = () => {
    setNameFilter('');
    setStatusFilter('');
  };

  let [valueFrom, setValueFrom] = useState();
  let [valueTo, setValueTo] = useState();
  let [category, setCategory] = useState()

  // Update the value when the NumberInput component value changes
  const handleChangeInputFrom = (newValue) => {
    setValueFrom(newValue);
  };

  const handleChangeInputTo = (newValue) => {
    setValueTo(newValue);
  };

  function handleChange(e) {
    console.log(e.target)
    // setCategory(e.target.value)
    // category = e.target.value
  }

  function handleClick() {
    onParameterChange({ category, valueFrom, valueTo })
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('here')
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer v3.r.137440105.a077cda7bfea7618cc08cc357d86d8d77d1c5f2e.c094dc2135eaa978b177f9543a72a5ac0cbfcb57',
      'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
      'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
    };

    let req = "https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/";
    console.log(req)

    fetch(req, { headers })
      .then((response) => response.json())
      .then((data) => { setData(data); })
      .catch((error) => console.error(error));
    console.log(data)
  }, []);

  const options = [
    { value: 'option1', label: 'Option 1' },
  ];

  const styles = {

    rightSection: {
      borderTop: 'none',
      borderRight: 'none',
      borderBottom: 'none',
      borderLeft: 'none',
    },

  };


  // const initialValue = useRef();

  const handleResetButton = () => {
    console.log("hi")
    setValueFrom("");
    setValueTo("");
    setCategory(-1);
    category = ""
    valueFrom = ""
    valueTo = ''
    onParameterChange({ category, valueFrom, valueTo })
  };

  const { classes } = useStyles();

  return (
    <div className={classes.wrapper} >
      <div className={classes.body}>
        <div style={{ display: "flex", width: "100%" }}>
          <Title className={classes.title}>Фильтры</Title>
          <div onClick={handleResetButton} style={{ display: "flex", marginBottom: "auto", marginTop: "-23px", marginRight: "0", marginLeft: "auto" }}>
            <Text className={classes.reset}>
              Сбросить все</Text>
            <CloseButton style={{ marginBottom: "auto", marginTop: "15px", marginRight: "0", marginLeft: "auto" }}></CloseButton>
          </div>

        </div>

        <Text weight={500} size="lg" mb={5}>
          Отрасль
        </Text>
        {/* <Input w={275} component="select" onChange={handleChange} value={category} style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: " #ACADB9", marginBottom: "20px" }} inputRef={(node) => initialValue.current = node.value} rightSection={<IconChevronDown size={26} stroke={1.5} />} >
          <option label={"Выберете отрасль"} style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: " #ACADB9" }} value={-1}></option>
          {data ? (data.map(el => <option value={el["key"]} label={el["title"]}>{el["title"]}</option>)) : (<></>)}

        </Input> */}
        <Select
          // label="Выберите отрасль"
          mb={20}
          placeholder="Выберите отрасль"
          rightSection={<IconChevronDown size="1rem" />}
          rightSectionWidth={30}
          // onChange={handleChange}
          value={category}
          onChange={(category) => { setCategory(category); console.log(category)}}
          //  value={category} 
          data={data && Array.isArray(data) ? data.map(el => ({ value: el["key"], label: el["title"] }), {value: -1, label: "Выберете отрасль"}) : []}
          inputRef={(node) => initialValue.current = node.value} 
          // rightSection={<IconChevronDown size={26} stroke={1.5} />}
          styles={(theme) => ({
            item: {
              // applies styles to selected item
              '&[data-selected]': {
                '&, &:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[1],
                  color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
                },
              },

              // applies styles to hovered item (with mouse or keyboard)
              '&[data-hovered]': {
               
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[1],
                  color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
                
              },
            },
          })}
        />

        <Text weight={500} size="lg" mb={5}>
          Оклад
        </Text>
        <NumberInput
          style={{ minWidth: "275px", width: "100%" }}

          // mt="xl"
          inputRef={(node) => initialValue.current = node.value}
          // label="Отрасль"
          value={valueFrom}
          placeholder="От"
          onChange={handleChangeInputFrom}
          mt={8}
          // rightSection={arrows}
          styles={styles}
        // description="Description below the input"
        />
        <NumberInput
          mt={8}
          mb={25}
          // label="Отрасль"
          placeholder="До"
          onChange={handleChangeInputTo}
          value={valueTo}
          inputRef={(node) => initialValue.current = node.value}
          styles={styles}
        // description="Description below the input"
        />
   

       
        <Button className={classes.button} onClick={handleClick}>Применить</Button>
      </div>

    </div>
  );
}

export default FilterPanel;