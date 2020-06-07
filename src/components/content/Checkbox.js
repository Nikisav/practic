import React from 'react';

export function Checkbox({onChange, title, checked, dataId}) {
    return (
        <>
            <div>
            <input type="checkbox" onChange={onChange} title={title} checked={checked} dataId={dataId}/>{title}
            </div>

        </>
    );
}
