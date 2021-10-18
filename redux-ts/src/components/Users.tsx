import {useAppDispatch, useAppSelector} from "../app/hooks";
import {useEffect} from "react";
import {addOpenedTab, pushOrAddIfNew} from "../features/tabs/tabsSlice";
import {IUser} from "../interfaces/Interfaces";

export const Users = () => {

    const {selectedTab} = useAppSelector(state => state.tabs);

    const dispatch = useAppDispatch();

    return <div style={{display: "flex"}}>

        {selectedTab.users.map((user, index) => {
            return (
                <div style={{height: 150, backgroundColor: "tomato", margin: 10}}>
                    <p>{user.name}</p>
                    <button onClick={() => dispatch(pushOrAddIfNew(user))}> add</button>
                </div>
            )

        })}


    </div>
}