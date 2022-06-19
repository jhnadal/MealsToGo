import {React} from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
    // const [searchQuery, setSearchQuery] = React.useState('');
  
    // const onChangeSearch = query => setSearchQuery(query);
  
    return (
      <Searchbar
        placeholder="Search for restaurantes"
        //onChangeText={onChangeSearch}
        //value={searchQuery}
      />
    );
  };
  
  export default SearchBar;