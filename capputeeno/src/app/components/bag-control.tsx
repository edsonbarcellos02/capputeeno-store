import { useLocalStorage } from "../hooks/useLocalSorage";
import { BagIcon } from '../components/bag-icon';
import styled from "styled-components";


const BagCount = styled.span`
    top: 43px;
    width: 17px;
    color: #fff;
    height: 17px;
    padding: 0 5px;
    font-size: 12px;
    border-radius: 100%;
    margin-left: -10px;
    background-color: var(--delete-color);
`;

const BagContainer = styled.div`
    position: relative;

`;

export function BagControl(){
    const {value} = useLocalStorage('bag-items');
    return (
        <BagContainer>
            <BagIcon/>
            {value.length ? <BagCount>{value.length}</BagCount> : ''}
        </BagContainer>
    )
}