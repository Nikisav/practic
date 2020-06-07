import React from 'react';
import {Checkbox} from './Checkbox';
import {myStatementData} from "../../my-statement-data";
import {Table} from './Table1';
import {TableGroup} from './Table2';

const initialState = {
    showDate: true,
    showTime: true,
    showType: true,
    showIncome: true,
    showOutcome: true,
};

export function Content() {
    const [{showDate, showType, showTime, showIncome, showOutcome}, setCheckboxState] = React.useState(initialState);
    const formatMonth = (month) => month < 10 ? '0' + month : month;
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onChangeCheckbox = e => {
        const attr = e.target.getAttribute('dataId');
        const checked = e.target.checked;
        setCheckboxState(prevState => ({
            ...prevState,
            [attr]: checked,
        }));
    };
    const onChangeSelect = e => {
        setSelectedIndex(e.target.selectedIndex);
    };

    return (
        <div className="content">

            <div className="main_content">
                <div className="container">
                    {selectedIndex === 0 ? (
                        <Table
                            showDate={showDate}
                            showTime={showTime}
                            showType={showType}
                            showIncome={showIncome}
                            showOutcome={showOutcome}
                        />
                    ) : (
                        <TableGroup/>
                    )}
                </div>
            </div>

            <div className="sidebar_cont">
                <div className="sidebar_settings">
                    <h2>Отображать:</h2>
                    <div className="settings">
                        <Checkbox
                            checked={showDate}
                            title={' Дату'}
                            onChange={onChangeCheckbox}
                            dataId={'showDate'}
                        />
                        <Checkbox
                            checked={showTime}
                            title={' Время'}
                            onChange={onChangeCheckbox}
                            dataId={'showTime'}
                        />
                        <Checkbox
                            checked={showType}
                            title={' Тип'}
                            onChange={onChangeCheckbox}
                            dataId={'showType'}
                        />
                        <Checkbox
                            checked={showIncome}
                            title={' Приход'}
                            onChange={onChangeCheckbox}
                            dataId={'showIncome'}
                        />
                        <Checkbox
                            checked={showOutcome}
                            title={' Расход'}
                            onChange={onChangeCheckbox}
                            dataId={'showOutcome'}
                        />
                    </div>
                </div>
                <div className="sidebar_settings">
                        <h2>Группировка</h2>
                        <div>
                            <select onChange={onChangeSelect}>
                                <option>Без группировки</option>
                                <option>С группировкой</option>
                            </select>
                        </div>
                </div>
            </div>
        </div>  /* content */
    );
}

/*<div className="App-content">
    <input type="checkbox" onChange={onChange} title={'Показать дату'} checked={showDate}/>
    <div className="App-label-container">
        <label>Показать дату</label>
    </div>
    <table>
        <tr>
            {showDate && <th>
                Дата
            </th>}
            <th>
                Тип
            </th>
            <th>
                Приход
            </th>
            <th>
                Расход
            </th>
        </tr>
        {myStatementData.map(el => {
            const tableDate = new Date(el.date).getDate() + '.' + formatMonth(new Date(el.date).getMonth() + 1) + '.' + new Date(el.date).getFullYear();
            return (
                <tr>
                    {showDate && <td>
                        {tableDate}
                    </td>}
                    <td>
                        {el.type}
                    </td>
                    <td className={'green'}>
                        {el.amount > 0 ? el.amount : ''}
                    </td>
                    <td className={'red'}>
                        {el.amount < 0 ? -el.amount : ''}
                    </td>
                </tr>
            )
        })}
    </table>
</div>*/
