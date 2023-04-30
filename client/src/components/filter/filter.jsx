import styles from "./filter.module.css";

const Filter = ({
  typesList,
  handleFilterType,
  handleFilterOrigin,
  order,
  handleFilterDefense,
  orderByAttack,
}) => {
  return (
    <div className={styles.contenedortodos}>
      <h2 className={styles.filterby}>Filter by:</h2>
      <div>
        <span>Order </span>
        <div className={styles.selectContainer}>
          <select name="" onChange={order} className={styles.selectororder}>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
          </select>
        </div>
      </div>
      <div>
        <span>Order by attack</span>
        <div className={styles.selectContainer}>
          <select name="" onChange={orderByAttack}>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
          </select>
        </div>
      </div>
      <div>
        <span>Types </span>
        <div className={styles.selectContainer}>
          <select onChange={handleFilterType}>
            <option value="All">All</option>
            {typesList.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <span>Origin </span>
        <div className={styles.selectContainer}>
          <select name="" onChange={handleFilterOrigin}>
            <option value="All">All</option>
            <option value="DataBase">DataBase</option>
            <option value="Api">Api</option>
          </select>
        </div>
      </div>
      <div>
        <span>Order by defense</span>
        <select onChange={handleFilterDefense}>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;
