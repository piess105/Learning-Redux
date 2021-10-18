import {changeSelectedTab} from "../features/tabs/tabsSlice";
import React, {useEffect, useState} from "react";
import {ITab} from "../interfaces/Interfaces";
import {useAppDispatch} from "../app/hooks";

export const SingleTab = (props: { item: ITab, isActive : boolean }) => {

    const {item, isActive} = props;

    const dispatch = useAppDispatch();

    const [blink, setBlink] = useState(() => false);

    const setColor = (value: boolean): string => {

        if (value)
            return "red";

        return "white";
    }

    const setActive =(active : boolean) : string => {

        if(active)
            return "2px solid black"

        return "1px solid silver";
    }

    useEffect(() => {

        if (blink)
            return;

        setBlink(true);

        setTimeout(() => {
            setBlink(false);
        }, 200);

    }, [item.users]);

    return (
        <button style={{margin: 10, backgroundColor: setColor(blink), transition: "background-color .2s", border : setActive(isActive)}}
                onClick={() => dispatch(changeSelectedTab(item))}>
            {item.name}
        </button>
    )
}