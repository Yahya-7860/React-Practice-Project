import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        {
            id: nanoid,
            text: 'yahya',
            isEditable: false,
        }
    ]
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action) => {
            const contact = {
                id: nanoid(),
                text: action.payload,
                isEditable: false,
            }
            state.contacts.push(contact)
        },

        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        },

        updateContact: (state, action) => {
            state.contacts = state.contacts.map(
                (contact) =>
                  contact.id === action.payload
                    ? { ...contact, isEditable: !contact.isEditable }
                    : contact,
              );
        }
    }
})

export const { addContact, deleteContact, updateContact } = contactSlice.actions
export default contactSlice.reducer
