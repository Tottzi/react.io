import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Array part
let lakes = [
  'Balaton',
  'Tisza',
  'Femunden'
];

let AppArray = ({lakes}) =>{
  return (
    <ul>
      {lakes.map(lake=>(
        <li>{lake}</li>
      ))}
    </ul>
  )
}

//Object part
let cars = [
  {id: 1 , type: 'BMW', doors: '3'},
  {id: 2 , type: 'VW', doors: '5'},
  {id: 3 , type: 'Ferrari', doors: '2'},
]

let AppObj = ({cars}) =>{
  return (
    <div>
      {cars.map(car =>(
        <div key={car.id}>
          <h3>Type: {car.type}</h3>
          <p>Doors: {car.doors}</p>
        </div>
      ))}
    </div>
  )
}

//Multiple elements
let Lake = ({name}) =>{
  return (
    <h4>Visit Femunden</h4>
  )
}

let SkiResort = ({name}) => {
  return (
    <h4>Visit Kolsås</h4>
  )
}
let Hello = (props) => {
  console.log(props)
  return (
  <div>
    <h1>Welcome to {props.library}</h1>
    <p>Let's build something cool</p>
    <h2>List from array</h2>
    <AppArray lakes={lakes}/>
    <h2>list from object</h2>
    <AppObj cars={cars}/>
  </div>
  )
}

let LakeSki = ({season}) => {
  return season === 'summer' ? <Lake/> : <SkiResort/>
}

//useState hooks

let AppHook = () => {
  const [status, setStatus] = useState('Open')
  return (
    <div>
      <h1>Status: {status}</h1>
      <button onClick={()=>setStatus('Close')}>Close</button>
      <button onClick={()=>setStatus('Open')}>Open</button>
      <button onClick={()=>setStatus('Break')}>Break</button>
    </div>
  )
}

let AppCheck = () => {
  const [checked, setchecked] = useState(false)
  console.log(checked)
  return (
    <>
      <input type="checkbox" value={checked}
      onChange={()=> setchecked (checked => !checked)}
      />
      {checked ? 'Checked' : 'Unchecked'}
    </>
  )
}

let AppEffect = () => {
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  useEffect(() => {
    console.log(`Field1: ${val1}`)
  },[val1])
  useEffect(() => {
    console.log(`Field2: ${val2}`)
  },[val2])
  return (
    <>
      <label>
        Favorite phrase:
        <input 
          value={val1}
          onChange={e => setVal1(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Also a phrase:
        <input 
          value={val2}
          onChange={e => setVal2(e.target.value)}
        />
      </label>
      <br></br>
    </>
  )
}
ReactDOM.render(
  //React.createElement('div',{style: {color: 'blue'}},
  //React.createElement('h1', null, 'Hello')),
  /*<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>*/
  //<h1>{hello()}</h1>,
  <>
    <AppEffect/>
    <AppCheck/>
    <AppHook/>
    <Hello library='React'/>
    <LakeSki season='spring'/>
  </>
  ,
  document.getElementById('root')
);


