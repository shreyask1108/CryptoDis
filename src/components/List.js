

import React, { Component } from 'react'

export default class List extends Component {
  // Constructor 
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        DataisLoaded: false
    };
}


// ComponentDidMount is used to
// execute the code 
componentDidMount() {
    fetch(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_asc%2C%20market_cap_desc%2C%20volume_asc%2C%20volume_desc%2C%20id_asc%2C%20id_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
        
}

render() {
    var i=0;
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;

    return (
    <div className = "App">
        
        <div class="table1">
<table class="table table-hover hello">
<thead class="table-dark">
<tr>
  <th scope="col">#</th>
  <th scope="col">Crypto</th>
  <th scope="col">Price</th>
  <th scope="col">1h</th>
  <th scope="col">24h</th>
  <th scope="col">7d</th>
</tr>
</thead>
<tbody class="table-light">
         {
            items.map((item) => ( 
              <>
              
<tr  key = { item.id }>
  <th scope="row">{i=i+1}</th>
  <td x><img class="image" src={item.image} alt="Italian Trulli"/>{ item.name }</td>
<td>${Math.round(item.current_price * 100) / 100}</td>
<td>{Math.round(item.price_change_percentage_1h_in_currency * 100) / 100}%</td>
<td>{Math.round(item.price_change_percentage_24h_in_currency * 100) / 100}%</td>
<td>{Math.round(item.price_change_percentage_7d_in_currency * 100) / 100}%</td>
</tr>

              </>
            
            ))
        }
        </tbody>
         </table>
         </div>
    </div>
);
}
}
