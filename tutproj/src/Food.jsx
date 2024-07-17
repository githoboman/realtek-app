function Food () {

    const food1 = "orange";
    const food2 = "banana";


    return (
        <ul>
            <li>apple</li>
            <li>{food1} </li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )

}

export default Food

/* if you are writing javascript in a return statement 
 you have to use curly braces */