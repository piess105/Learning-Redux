import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {changeSelectedTab} from "../features/tabs/tabsSlice";
import {SingleTab} from "./SingleTab";


export const Tabs = () => {

    const {openedTabs, selectedTab} = useAppSelector(state => state.tabs);

    const getIsActive = (index: number): boolean => {

        return openedTabs[index] === selectedTab;
    }

    return (
        <div>
            {openedTabs.map((item, index) => {
                return (
                    <SingleTab isActive={getIsActive(index)} item={item}/>
                )
            })}

        </div>
    )
}