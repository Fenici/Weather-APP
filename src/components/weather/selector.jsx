import React, { Component } from 'react';


class Selector extends Component {

    render() { 
        const{
            

        }=this.props

        return (<form>
            <label>
                Pick your favorite City:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="paris">Paris</option>
                    <option value="sydney">Sydney</option>
                    <option value="beijing">Beijing</option>
                    <option value="newyork">New York</option>
                </select>
            </label>
        </form>

        
            );
    }
}
 
export default Selector;