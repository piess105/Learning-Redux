import {ITab, IUser} from "../../interfaces/Interfaces";
import {counterSlice, CounterState, incrementByAmount, selectCount} from "../counter/counterSlice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "../../app/store";
import {createSortedStateAdapter} from "@reduxjs/toolkit/dist/entities/sorted_state_adapter";

export interface TabsState {
    selectedTab: ITab;
    openedTabs: ITab[];
}

const tabs: ITab[] = [
    {
        name: "Main",
        users: [{name: "kazik"}, {name: "Edwin"}]
    },
    {
        name: "Second",
        users: [{name: "janusz"}]
    }
]

const initialState: TabsState = {
    selectedTab: tabs[0],
    openedTabs: tabs
};

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        changeSelectedTab: (state, action: PayloadAction<ITab>) => {
            state.selectedTab = action.payload;
        },
        addOpenedTab: (state, action: PayloadAction<IUser>) => {

            state.openedTabs.push({name: "nowy", users: [action.payload]});
        },
        addUserToTab: (state, action: PayloadAction<{ user: IUser, tabIndex: number }>) => {

            state.openedTabs[action.payload.tabIndex].users.push(action.payload.user);
        }
    }
})

export const pushOrAddIfNew = (user: IUser): AppThunk => (
    dispatch,
    getState
) => {
    const {selectedTab, openedTabs} = getState().tabs;

    const selectedTabIndex = openedTabs.indexOf(selectedTab);

    if (selectedTabIndex + 1 >= openedTabs.length) {
        dispatch(addOpenedTab(user));
    } else {
        dispatch(addUserToTab({user: user, tabIndex: selectedTabIndex + 1}));
    }

};

export const {changeSelectedTab, addOpenedTab, addUserToTab} = tabsSlice.actions;

export default tabsSlice.reducer;