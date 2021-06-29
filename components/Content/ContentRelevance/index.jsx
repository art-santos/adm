import React, { useState, useEffect, useContext } from "react";
import Container from "./styles";
import RelevanceCard from "../../Cards/RelevanceCard/index";
import BlueSpinner from "../../Loading/blueSpinner";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from "axios";
import RelevanceContext from '../../../Context/RelevanceContext'



export default function ContentRelevance(provider) {
  const{setRelevanceItems} = useContext(RelevanceContext)
  const [plans, setPlans] = useState([])
  const [characters, updateCharacters] = useState(plans);
  const [order, setOrder] = useState([])

  
  useEffect(async () => {
   const result = await axios(`/api/providers/`)
   setPlans(result.data.data)
   updateCharacters(result.data.data)
  }, [])


  function getImage(image){
    if(image.includes('cloudinary')){
      return image
    }else{
      return '/'+image
    }
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
    localStorage.setItem("The List", JSON.stringify(items))
    const relevanceList = items.map((item, i) => {
      item.relevance = i+1
      return item;
    })
    setRelevanceItems(relevanceList)
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={handleOnDragEnd} onChange={console.log('a')}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul style={{listStyle:'number'}} className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({_id, provider, image, phone}, index) => {
                  return (
                    <Draggable key={_id} draggableId={_id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                          <RelevanceCard id={_id} title={provider} image={getImage(image)} phone={phone} />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}
