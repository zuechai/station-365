import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import "./TicketPage.scss";

export default function TicketPage () {
    return (
        <form className='form'
            // onSubmit={handleSubmit}
            >
                <div className='form__input'>
                    <InputField
                        label='Name'
                        placeholder='Owner'
                        type='text'
                        name='name'
                    />
                    <div className='form__group'>
                        <div className='form__group-container'>
                            <input
                                className='form__group-radio'
                                type='radio'
                                name='group'
                                value='design'
                            />
                            <p className='form__group-text'>Design</p>
                        </div>
                        <div className='form__group-container'>
                            <input
                                className='form__group-radio'
                                type='radio'
                                name='group'
                                value='development'
                            />
                            <p className='form__group-text'>Development</p>
                        </div>
                        <div className='form__group-container'>
                            <input
                                className='form__group-radio'
                                type='radio'
                                name='group'
                                value='security'
                            />
                            <p className='form__group-text'>Security</p>
                        </div>
                        <div className='form__group-container'>
                            <input
                                className='form__group-radio'
                                type='radio'
                                name='group'
                                value='machine learning'
                            />
                            <p className='form__group-text'>Machine Learning</p>
                        </div>
                        <div className='form__group-container'>
                            <input
                                className='form__group-radio'
                                type='radio'
                                name='group'
                                value='hr'
                            />
                            <p className='form__group-text'>HR</p>
                        </div>
                    </div>
                    <InputField
                        label='Submittal Date'
                        placeholder='Date'
                        type='date'
                        name='submit date'
                    />
                    <InputField
                        label='Target Date'
                        placeholder='Date'
                        type='date'
                        name='target_date'
                    />
                    <div className='form__problem'>
                        <div className='form__problem-container'>
                            <input
                                className='form__problem-checkbox'
                                type='checkbox'
                                name='problem'
                                value='quality'
                            />
                            <p className='form__problem-text'>Quality</p>
                        </div>
                        <div className='form__problem-container'>
                            <input
                                className='form__problem-checkbox'
                                type='checkbox'
                                name='problem'
                                value='hardware'
                            />
                            <p className='form__problem-text'>Hardware</p>
                        </div>
                        <div className='form__problem-container'>
                            <input
                                className='form__problem-checkbox'
                                type='checkbox'
                                name='problem'
                                value='facilty'
                            />
                            <p className='form__problem-text'>Facilty</p>
                        </div>
                        <div className='form__problem-container'>
                            <input
                                className='form__problem-checkbox'
                                type='checkbox'
                                name='problem'
                                value='operations'
                            />
                            <p className='form__problem-text'>Operations</p>
                        </div>
                        <div className='form__problem-container'>
                            <input
                                className='form__problem-checkbox'
                                type='checkbox'
                                name='problem'
                                value='engagement'
                            />
                            <p className='form__problem-text'>Engagement</p>
                        </div>
                        <div className='form__problem-container'>
                            <input
                                className='form__problem-checkbox'
                                type='checkbox'
                                name='problem'
                                value='wfh'
                            />
                            <p className='form__problem-text'>WFH</p>
                        </div>
                    </div>
                    <InputField
                        label='Problem Statement'
                        placeholder='Your Answer'
                        type='text'
                        name='problem_statement'
                    />
                    <div className='form__priority'>
                        <div className='form__priority-container'>
                            <input
                                className='form__priority-radio'
                                type='radio'
                                name='priority'
                                value='one'
                            />
                            <p className='form__priority-text'>1</p>
                        </div>
                        <div className='form__priority-container'>
                            <input
                                className='form__priority-radio'
                                type='radio'
                                name='priority'
                                value='two'
                            />
                            <p className='form__priority-text'>2</p>
                        </div>
                        <div className='form__priority-container'>
                            <input
                                className='form__priority-radio'
                                type='radio'
                                name='priority'
                                value='three'
                            />
                            <p className='form__priority-text'>3</p>
                        </div>
                        <div className='form__priority-container'>
                            <input
                                className='form__priority-radio'
                                type='radio'
                                name='priority'
                                value='four'
                            />
                            <p className='form__priority-text'>4</p>
                        </div>
                        <div className='form__priority-container'>
                            <input
                                className='form__priority-radio'
                                type='radio'
                                name='priority'
                                value='five'
                            />
                            <p className='form__priority-text'>5</p>
                        </div>
                    </div>
                    <InputField
                        label='Employees connected to issue (if applicable)'
                        placeholder='Name'
                        type='text'
                        name='connection'
                    />
                </div>
                <div className='form__button'>
                    <Button
                        content='SUBMIT'
                    />
                </div>
            </form>
    )
}