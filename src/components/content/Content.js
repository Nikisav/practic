import React from 'react';
import {Checkbox} from './Checkbox';
import {myStatementData} from "../../my-statement-data";

const initialState = {
    showDate: true,
    showTime: true,
    showType: true,
    showIncome: true,
    showOutcome: true,
};

export function Content() {
    const [{showDate, showType, showIncome, showOutcome}, setCheckboxState] = React.useState(initialState);
    const formatMonth = (month) => month < 10 ? '0' + month : month;

    const onChange = e => {
        const attr = e.target.getAttribute('dataId');
        const checked = e.target.checked;
        setCheckboxState(prevState => ({
            ...prevState,
            [attr]: checked,
        }));
    };

    return (<div className="content">

        <div className="main_content">
                <div className="container">
                  <table>
                    <tr>
                        {showDate && <th>
                            Дата
                        </th>}
                        {showType && <th>
                            Тип
                        </th>}
                        {showIncome && <th>
                            Приход
                        </th>}
                        {showOutcome && <th>
                            Расход
                        </th>}
                    </tr>
                      {myStatementData.map(el => {
                          const tableDate = new Date(el.date).getDate() + '.' + formatMonth(new Date(el.date).getMonth() + 1) + '.' + new Date(el.date).getFullYear();
                          return (
                              <tr>
                                  {showDate && <td>
                                      {tableDate}
                                  </td>}
                                  {showType && <td>
                                      {el.type}
                                  </td>}
                                  {showIncome && <td className={'income'}>
                                      {el.amount > 0 ? el.amount : ''}
                                  </td>}
                                  {showOutcome && <td className={'outcome'}>
                                      {el.amount < 0 ? -el.amount : ''}
                                  </td>}
                              </tr>
                          )
                      })}
                </table>
                </div>
            </div>

            <div className="sidebar_cont">
                <div className="sidebar_settings">
                    <h2>Отображать:</h2>
                    <div className="settings">
                        <Checkbox
                            checked={showDate}
                            title={' Дату'}
                            onChange={onChange}
                            dataId={'showDate'}
                            initialState
                        />
                        <Checkbox
                            checked={showType}
                            title={' Тип'}
                            onChange={onChange}
                            dataId={'showType'}
                            initialState
                        />
                        <Checkbox
                            checked={showIncome}
                            title={' Приход'}
                            onChange={onChange}
                            dataId={'showIncome'}
                            initialState
                        />
                        <Checkbox
                            checked={showOutcome}
                            title={' Расход'}
                            onChange={onChange}
                            dataId={'showOutcome'}
                            initialState
                        />
                    </div>
                </div>
                <div className="sidebar_settings">
                    <h2>Группировка</h2>
                    <div>
                        <select>
                            <option>Без группировки</option>
                            <option>Группировка по году</option>
                        </select>
                </div>
                </div>
            </div>
        </div>  /* main_content */
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
