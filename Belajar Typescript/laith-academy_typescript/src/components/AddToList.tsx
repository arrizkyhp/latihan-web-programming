import React, { useState } from 'react'
import {IState as Props} from '../App'

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
    }[]>>
}



const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    
    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = (): void => {
        if(
            !input.name ||
            !input.age ||
            !input.url
        ) {
            return 
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ])

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }
  return (
    <div className='AddToList'>
        <input 
            className='AddToList-input'
            type="text"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
            name="name"
        />
        <input 
            className='AddToList-input'
            type="number"
            placeholder="Age"
            value={input.age}
            onChange={handleChange}
            name="age"
        />
        <input 
            className='AddToList-input'
            type="text"
            placeholder="Image Url"
            value={input.url}
            onChange={handleChange}
            name="url"
        />
        <textarea 
            className='AddToList-input'
            placeholder="Notes"
            value={input.note}
            onChange={handleChange}
            name="note"
            
        />
        <button
            className='AddToList-btn'
            onClick={handleClick}
        >Add to List</button>
    </div>
  )
}

export default AddToList