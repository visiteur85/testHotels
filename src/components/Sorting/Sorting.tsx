import React from 'react';

type SortType = {
    name:string
}

export const Sorting = ({name}:SortType) => {
    return (
        <div>
            {name}
        </div>
    );
};

