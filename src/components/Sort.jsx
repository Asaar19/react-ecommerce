// import { BsFillGridFill, BsList}  from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4 g-2">
              <button
                className={grid_view ? "active sort-btn" : "sort-btn"}
                onClick={setGridView}
              >
                
                <GridViewIcon />
              </button>
              <button
                className={!grid_view ? "active sort-btn" : "sort-btn"}
                onClick={setListView}
              >
                <ViewListIcon />
              </button>
            </div>
            <div className="col-md-4">
              <p className="products-available mb-0">{`${filter_products.length} Products Available`}</p>
            </div>
            <div className="col-md-4">
              <form action="#">
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" onClick={sorting}>
                  <option value="lowest">Price(lowest)</option>
                  <option value="highest">Price(highest)</option>
                  <option value="a-z">Price(a-z)</option>
                  <option value="z-a">Price(z-a)</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sort;
