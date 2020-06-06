import React from 'react';

export function Limit(showDate, showType, showIncome, showOutcome){
    let i = 0;
    if(showDate === false)
        i++;
    if(showType === false)
        i++;
    if(showIncome === false)
        i++;
    if(showOutcome === false)
        i++;
    if(i === 3)
        return(0);
    return(1);

}

export function Checkbox({onChange, title, checked, dataId, initialState}) {
    if(Limit( initialState.showDate, initialState.showType, initialState.showIncome, initialState.showOutcome) === false)
    {  return (
            <>
                <div>
                    <input type="checkbox" onChange={onChange} title={title} checked dataId={dataId}/>{title}
                </div>
            </>
        );};

    return (
        <>
            <div>
            <input type="checkbox" onChange={onChange} title={title} checked={checked} dataId={dataId}/>{title}
            </div>
        </>
    );
}