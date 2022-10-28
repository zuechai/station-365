import axios from 'axios';
import InputField from '../../components/InputField/InputField';
import './HomePage.scss'
import { useState } from "react";
import Button from '../../components/Button/Button';

export default function HomePage() {

    const [card, setCard] = useState([]);
    const [vote, setVote] = useState(0);

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const form = event.target;

    //     const name = form.name.value;

    //     const formObj = {
    //         name
    //     }

    //     axios
    //         .post('http://localhost:8080/', formObj)
    //         .then((resp) => {
    //             setCard(card(resp.data));
    //         })
    //         .catch((error) => {
    //             alert(error);
    //         })
    // }

    const onClick = (event) => {
        event.preventDefault();

        setVote(vote + 1);
    }

    return (
        <div>
            <form className='form' 
            // onSubmit={handleSubmit}
            >
                <div className='form__input'>
                    <InputField
                        label='Name'
                        placeholder='Name'
                        type='text'
                        name='name'
                    />
                </div>
                <div className='form__button'>
                    <Button
                        content='Button'
                    />
                </div>
                <Button
                    content='Vote'
                    onClick={onClick}
                />
                <p>{vote}</p>

            </form>
        </div>
    );
}