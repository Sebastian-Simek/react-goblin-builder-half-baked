import './App.css';
import { useState } from 'react';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';

function App() {
  const [allGoblins, setAllGoblins] = useState([]);
  const [visibleGoblins, setVisibleGoblins] = useState(allGoblins);
  const [goblinFormName, setGoblinFormName] = useState('');
  const [goblinFormHP, setGoblinFormHP] = useState('');
  const [goblinFormColor, setGoblinFormColor] = useState();
 
  console.log(allGoblins);

  function submitGoblin(e) {
    e.preventDefault();
    const goblin = {
      name: goblinFormName,
      HP: goblinFormHP,
      color: goblinFormColor
    };
    const newGoblin = [...allGoblins, goblin];
    setAllGoblins(newGoblin);
  }

  function handleDeleteGoblin(name) {
    // find the index of the goblin in allGoblins with this name
    const index = allGoblins.findIndex(goblin => goblin.name === name);
    // use splice to delete the goblin object at this index
    allGoblins.splice(index, 1);
    // update the allGoblins array immutably to this new, smaller array
    setAllGoblins(allGoblins);
  }

  function handleFilterGoblins(search) {
    // use the filter method to get an array of goblins whose name includes this search argument

    // if there is a search argument, set the visible goblins to the filtered goblins
    // if the search argument is undefined, set the visible goblins in state to just be the array of all goblins
  }


  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <Goblin goblin={{
          color: goblinFormColor,
          name: goblinFormName,
          HP: goblinFormHP
        }}
        handleDeleteGoblin={handleDeleteGoblin} />
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        {/* note that handleFilterGoblins is defined upstairs. This is where the allGoblins array gets filtered */}
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm 
       
        submitGoblin={submitGoblin}
        goblinFormName={goblinFormName} 
        setGoblinFormName={setGoblinFormName}
        goblinFormColor={goblinFormColor} 
        setGoblinFormColor={setGoblinFormColor}
        goblinFormHP={goblinFormHP} 
        setGoblinFormHP={setGoblinFormHP}
       
      />
      <GoblinList 
        goblins={allGoblins} // this takes in an array of goblins. If the filteredGoblins has a length, use that array. Otherwise, use the allGoblins array 
        handleDeleteGoblin={handleDeleteGoblin} // note that the goblin list has access to the ability to delete
      />
    </div>
  );
}

export default App;
