import React from 'react';

const Isi: React.FC<{
    judul: string,
    body: string;
}> = (props) => {
    return (
        <React.Fragment>
            <p><b>Title</b>: {props.judul}</p>
            <p><b>Body</b>: {props.body}</p>
        </React.Fragment>
    )
};

export default Isi;