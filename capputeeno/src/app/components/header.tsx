"use client"
import styled from "styled-components"
import { Saira_Stencil_One } from "next/font/google";

const SairaStencilOne = Saira_Stencil_One({ 
    weight:['400'],
    subsets: ["latin"] 
});


interface headerProps
{

}

const TagHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px
    }
`;
const Logo = styled.a `
    font-size: 40px;
    font-weight: 400;
    line-height: 150%;
    color: var(--logo-color);    
`;

import {PrimaryInputWSearchIcon} from '../components/primary-input';
import {BagControl} from '../components/bag-control';

export function Header(props: headerProps){
    return(
        <TagHeader>
            <Logo className={SairaStencilOne.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?"/>
                <BagControl/>
            </div>
        </TagHeader>
    )
}