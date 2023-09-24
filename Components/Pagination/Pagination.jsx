"use client";
import styles from "./Pagination.module.scss";
import { memo, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import ReactPaginate from "react-paginate";

const Pagination = ({ total }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const pageNumber = searchParams.get("sayfa")
    ? parseInt(searchParams.get("sayfa")) - 1
    : undefined;

  const pageCount = Math.ceil(
    parseInt(total) / parseInt(process.env.LIMIT_SIZE)
  );

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleClick = (event) => {
    const number = event.selected;
    return router.push(`${pathName}?${createQueryString("sayfa", number + 1)}`);
  };

  return (
    <div className={styles.wrapper}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        activeClassName={`${styles.item}  ${styles.active}`}
        breakClassName={`${styles.item}  ${styles["break-me"]}`}
        containerClassName={`${styles.pagination}`}
        disabledClassName={`${styles["disabled-page"]}`}
        className={`${styles["pagination"]}`}
        pageClassName={`${styles.item} ${styles["pagination-page"]}`}
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"
        onPageChange={handleClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        initialPage={pageNumber}
        forcePage={pageNumber}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default memo(Pagination);
