"use client";
import { useRouter } from "next/navigation";
export default function DatatableItem({ item, handleDelete, detailPageUrl }) {
  const router = useRouter();
  return (
    <tr>
      {Object.keys(item).map((key, index) => (
        <td key={index}>{item[key]}</td>
      ))}
      <td>
        <button
          type="button"
          onClick={() => router.push(`${detailPageUrl}/${item.id}`)}
          className="btn btn-warning rounded"
        >
          Detay
        </button>
      </td>
      <td>
        <button
          onClick={async () => await handleDelete({ id: item.id })}
          type="button"
          className="btn btn-danger rounded"
        >
          Sil
        </button>
      </td>
    </tr>
  );
}
