import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';

const AddTechModal = ({addTech}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = ()=>{
        if(firstName === '' || lastName === ''){
            M.toast({html: 'Please enter the first and last name'})
        }else{
            addTech({
                firstName,
                lastName
            });

            M.toast({html: `Technician ${firstName} ${lastName} added succesfully...`})

            // Clear Fields
            setFirstName('');
            setLastName('');
        }

    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="firstName" 
                            vlaue={firstName} 
                            onChange={e => setFirstName(e.target.value)} 
                        />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="lastName" 
                            vlaue={lastName} 
                            onChange={e => setLastName(e.target.value)} 
                        />
                        <label htmlFor="lasttName" className="active">
                            Last Name
                        </label>
                    </div>
                </div>
                
            </div>
            <div className="modal-footer">
                <a 
                    href="#!" 
                    onClick={onSubmit} 
                    className="modal-close waves-effect waves-light btn blue"
                >
                    Enter
                </a>
            </div>
        </div>
    )
    
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}

export default connect(null, {addTech})(AddTechModal);

