import styled from "styled-components";
import {SearchIcon} from '../components/search-Icon';
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 352px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    border-radius: 8px;
    padding: 10px 16px;
    font-family: inherit;
    color: var(--text-dark);
    background-color: var(--bg-secondary);
`;

const InputContainer = styled.div`
    width: 352px;
    position: relative;

    svg {
        top: 50%;
        right: 20px;
        position: absolute;
        transform: translateY(-50%);
    }
`;


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function PrimaryInputWSearchIcon(props: InputProps){
    return (
        <InputContainer>
        <PrimaryInput {...props}/>
        <SearchIcon/>
        </InputContainer>
    )
}