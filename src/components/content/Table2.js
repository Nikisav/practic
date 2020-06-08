import React from 'react';
import {myStatementData} from '../../my-statement-data';

export function TableGroup() {
    const groupedByYearData = myStatementData.reduce((acc, el) => {
        const year = new Date(el.date).getFullYear();
        if (acc.find(el2 => el2.year === year)) {
            const target = acc.filter(el2 => el2.year === year)[0];
            if (el.amount > 0) {
                target.income += el.amount;
            } else {
                target.outcome -= el.amount;
            }
            return acc;
        } else {
            const newYear =
                {
                    year,
                    income: el.amount > 0 ? el.amount : 0,
                    outcome: el.amount < 0 ? el.amount : 0,
                };
            return [
                ...acc,
                newYear,
            ]
        }
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Год
                    </th>
                    <th>
                        Приход
                    </th>
                    <th>
                        Расход
                    </th>
                </tr>
            </thead>
            {groupedByYearData.sort((el1, el2) => el1.year - el2.year).map(({year, income, outcome}) => {
                return (
                    <tr>
                        <td>
                            {year}
                        </td>
                        <td className="income">
                            {income.toFixed(2)}
                        </td>
                        <td className="outcome">
                            {outcome.toFixed(2)}
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}