import React, { useEffect, useState } from "react";
import InputItem from '../components/InputItem.js';
import TodoList from '../components/TodoList.js';
import { testFunction } from "../api/testApi.js";
import ApiList from '../components/ApiList.js';

function TodoPage() {

    // This data is only present for demo purposes. Usually you obtain this through the backend.
    const todoItemsData = [
        {
            id: 1,
            title: "Do groceries",
            done: true
        },
        {
            id: 2,
            title: "Clean bathroom",
            done: false
        },
        {
            id: 3,
            title: "Dispose thrash",
            done: true
        },
    ]

    const [todoItems, setToDoItems] = useState(todoItemsData);
    
    const addItem = title => {
        const newItem = {
            id: 4,
            title: title,
            done: false
        };
        setToDoItems([...todoItems, newItem]);
        
    }

    
    const [apiItems, setApiItems] = useState([]);
    const refreshItems = () =>{
        testFunction()
        .then(apiItems => {
            setApiItems(apiItems);
        })
    };

    useEffect(() => {
        refreshItems();
    }, []);

    

    const summaries = apiItems.map(item => item.summary);
    
    
    return (
        <div className="container">
            <div className="inner">
                <InputItem addItem={addItem} />
                <TodoList todoItems={todoItems} />
                <ApiList apiItems={summaries} />
            </div>
        </div>
    )
}

export default TodoPage;