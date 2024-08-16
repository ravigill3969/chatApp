const GenderCheckbox = ({ onCheckBoxChange, selected }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selected === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selected === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selected === "female" ? "selected" : ""
          } `}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selected === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
