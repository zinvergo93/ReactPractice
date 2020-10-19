import React from 'react';

export const JournalEntry = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}
export const SomeOtherComponent = (props) => {
    return(
        <div>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}
