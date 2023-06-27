import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const Selector = ({onCategoryChange, recordCollection, setRecordCollection}) => {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    if (recordCollection != null) {
    setRecordCollection(recordCollection);}

    setCategory(selectedCategory);
    onCategoryChange(selectedCategory);
  };

  const categories = ["Fills", "Double Stroke Rolls", "Paradiddles", "Patterns", "Songs", "Techniques", "Stick Tricks", "Other", "Clear"]

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ minWidth: '50%' }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
            {categories.map((category) => {
                return (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                )
            })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Selector;