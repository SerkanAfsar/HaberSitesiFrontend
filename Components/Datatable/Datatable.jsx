import Pagination from "../Pagination/Pagination";
import DatatableItem from "./DatatableItem";
import styles from "./Datatable.module.scss";

export default function Datatable({
  headers,
  data,
  handleDelete,
  detailPageUrl,
  total,
}) {
  return (
    <table className={`table table-dark table-striped ${styles.table}`}>
      <thead>
        <tr>
          {Object.keys(headers)?.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
          <th>Detay</th>
          <th>Sil</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <DatatableItem
            item={item}
            key={index}
            handleDelete={handleDelete}
            detailPageUrl={detailPageUrl}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={Object.keys(headers).length + 2}>
            <Pagination total={total} />
          </th>
        </tr>
      </tfoot>
    </table>
  );
}
