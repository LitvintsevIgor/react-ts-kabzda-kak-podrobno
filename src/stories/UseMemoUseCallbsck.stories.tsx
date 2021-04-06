import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCounting = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo( () => {
        let tempResult = 1
        for (let i = 1; i <= a; i ++) {
            let fake = 0;
            while (fake < 100000000) {
                fake ++;
                const fakeValue = Math.random();
            }
            tempResult = resultA * i;
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i ++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={ e => setA(Number(e.currentTarget.value)) }/>
        <input value={b} onChange={ e => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div><div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("USERS SECRET")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div> )}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Anton", "Sveta", "Ivan"]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > 1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, "Katya" + new Date().getTime()]
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"]);

    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf("a") > 1)
    }, [books])

    // const addBook = () => {
    //     console.log(books)
    //     const newBook = [...books, "Angular" + new Date().getTime()]
    //     setBooks(newBook);
    // }

    const memoizedAddBook = useMemo( () => {
        return () => {
            console.log(books)
            const newBook = [...books, "Angular" + new Date().getTime()]
            setBooks(newBook);
        }
    } , [books]);

    const memoizedAddBook2 = useCallback( () => {
            console.log(books)
            const newBook = [...books, "Angular" + new Date().getTime()]
            setBooks(newBook);
    } , [books]);

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>

        {counter}
        <Book books={newArray} addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretType = {books: Array<string>, addBook: () => void};

const BooksSecret = (props: BooksSecretType) => {
    console.log("BOOKS SECRET")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div> )}
    </div>
}

const Book = React.memo(BooksSecret)