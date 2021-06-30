import React, {useMemo} from 'react';

const users = [
    { id: 1, name: 'Snehitha'},
    { id: 2, name: 'Sneha'},
    { id: 3, name: 'Pinky'},
    { id: 4, name: 'Cherry'},
    { id: 5, name: 'Bunny'}
];

const UserSearch = () => {

    const [text, setText] = React.useState('');
    const [search, setSearch] = React.useState('');

    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleSearch = () => {
        setSearch(text);
    }
    
    const filteredUsers = React.useMemo(() => 
        users.filter(users => {
            console.log('---filteredUsers---');
            return users.name.toLowerCase().includes(search.toLowerCase());
        }), [search]
    )

    return (
        <div>
            <input type="text" placeholder="search user" value={text} onChange={handleText} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredUsers.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
    
}
export default UserSearch;