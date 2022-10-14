import * as React from 'react';
import {useState} from "react";
import {CircularProgress} from "@mui/material"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicCard from './card';
import InfiniteScroll from "react-infinite-scroll-component";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  data: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, data, ...other } = props;
  const [items, setItems] = useState(Array.from(({length:4})))
  const [hasMore, setHasMore] = useState(true)
  const fetchMoreData =()=>{
    if(items >= data.viewed.length){
        setHasMore(false);
        return
    }
    setTimeout(()=>{
        setItems(items.concat(data.viewed.from({length:4})))
    },3000)
  }
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
    {/* <InfiniteScroll dataLength={data.viewed ? data.viewed.length : 0} next={()=>fetchMoreData} hasMore={hasMore} loader={<CircularProgress/>}> */}
      {value === index && (
        <Box sx={{ p: 3 }}>
          {index === 0 ?
          data.viewed.map((a:any)=>(
            <BasicCard data={a}/>
          ))
            : index === 1 ?
          data.emailed.map((a:any)=>(
            <BasicCard data={a}/>
          )) : index === 2 ?
          data.shared.map((a:any)=>(
            <BasicCard data={a}/>
          )) : ''}
        </Box>
      )}
      {/* </InfiniteScroll> */}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({viewed, shared, emailed}:{viewed:any, shared:any, emailed:any}) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: {xs:"100%", sm:'50%'}, mt:5 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} variant="fullWidth" centered onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{color:"white"}} label="Most Viewed" {...a11yProps(0)} />
          <Tab sx={{color:"white"}} label="Most Emailed" {...a11yProps(1)} />
          <Tab sx={{color:"white"}} label="Most Shared" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} data={viewed}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1} data={emailed}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} data={shared}>
        Item Three
      </TabPanel>
    </Box>
  );
}
