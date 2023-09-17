const DataShow = ({ days, months, years }) => {
  return (
    <div className="font-poppins text-[70px] italic font-[800]">
      <h1>
        <span className="text-Purple">{years ? years : "--"} </span>
        years
      </h1>
      <h1>
        <span className="text-Purple">{months ? months : "--"} </span>
        months
      </h1>
      <h1>
        <span className="text-Purple">{days ? months : "--"} </span>
        days
      </h1>
    </div>
  );
};
export default DataShow;
