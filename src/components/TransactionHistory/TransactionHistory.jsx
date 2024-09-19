import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
return (<table>
  <thead className={css.nameColumn}>
    <tr >
      <th className={css.nameColumnText}>Type</th>
      <th className={css.nameColumnText}>Amount</th>
      <th className={css.nameColumnText}>Currency</th>
    </tr>
  </thead>

    <tbody >
        {items.map(({id, type, amount, currency}) => (
    <tr className={css.textContent} key={id}>
      <td className={css.textType}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>))}
   
  </tbody>
</table>)
}