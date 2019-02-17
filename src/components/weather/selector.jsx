import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Button } from 'semantic-ui-react';

/* 
Creating dropdown selection 
& allow user to select different cities from API
*/
class Selector extends Component {

    render() { 
        const{
            value,
            handleChange,
            handleSubmit
        }=this.props

        return (<form onSubmit={handleSubmit} >
            <label>
                <br/><br/>
                <select value={value} onChange={handleChange} placeholder='Select' className="ui search fluid dropdown" >
                    <option value="Paris">Paris</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Beijing">Beijing</option>
                    <option value="London">London</option>
                </select>
            </label>
            {/* <input type="submit" value="Submit" /> */}
                <br/>
            <Button basic onClick={handleSubmit} className="Search" >
            Search
            </Button>
        </form>

        
            );
    }
}
 
export default Selector;