import './search-box.styles.css'
 
const SearchBox=({className, placeholder, onChangeHandler})=>(
    <div>
        <input type='search' placeholder={placeholder} 
        className={`search-box ${className}`}  onChange={onChangeHandler}>

        </input>
    </div>


)

export default SearchBox