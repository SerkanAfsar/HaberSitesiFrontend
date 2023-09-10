import DatatableItem from "./DatatableItem";

export default function Datatable({
  headers,
  data,
  handleDelete,
  detailPageUrl,
}) {
  return (
    <table className="table table-dark table-striped">
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
    </table>
  );
}
