import React, { useContext } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { IoContext } from './IoContext';

const Nav = styled.nav`
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #262626;
    height: 50px;
    align-items: center;
    padding: 20px;

    & > * {
        margin: 10px;
    }
`

const Form = styled.form`
    position: fixed;
    top: 62px;
    left: 15px;
`

const Button = styled.button`
    background: none;
    border: none;

    :focus {
        outline: none;
    }
`

const TextInput = styled.input`
    background: #464646;
    border: none;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
`

const SaveButton = styled.input`
    background: #464646;
    border: none;
    padding: 10px;
    border-radius: 10px;
`

function NavBar() {

    const { id, setId } = useContext(IoContext);
    const [isFormShown, setFormShown] = useState(false);

    function handleInput(e) {
        setId(e.currentTarget.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFormShown(false);
    }

    return (
        <>
            <Nav>
                <span>{id}</span>
                <Button onClick={() => setFormShown(!isFormShown)}>Change Username</Button>
            <span>dylan</span>
            </Nav>
            {isFormShown && (
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="username">Change Username:</label>
                    <TextInput type="text" name="username" onChange={handleInput} value={id} />
                    <SaveButton type="submit" value="Save"/>
                </Form>
            )}
        </>
    )
}

export default NavBar;
