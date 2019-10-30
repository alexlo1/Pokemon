import React, { useContext } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { SearchContext } from '../contexts/SearchContext';

const useStyles = makeStyles({
  search: {
    width: 'auto',
    position: 'relative',
    borderRadius: 4,
    backgroundColor: fade('#fff', 0.15),
    '&:hover': {
      backgroundColor: fade('#fff', 0.25),
    },
  },
  searchIcon: {
    width: 32,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    paddingLeft: 32,
  },
});

const SearchBox = () => {
  const classes = useStyles();

  const { searchString, setSearchString } = useContext(SearchContext);
  
  const handleChange = e => {
    setSearchString(e.target.value);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon/>
      </div>
      <InputBase
        placeholder="Search..."
        value={searchString}
        onChange={handleChange}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchBox;
