import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "store/selectors";
import { fetchContacts } from "store/thunk";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(getContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {isLoading && <b>Loading contacts...</b>}
            {error && <b>{error}</b>}
            <ContactList />
        </div>
    )
}

export default ContactsPage