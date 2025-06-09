const checkbox = ({ id, checked, onCheckedChange }) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="form-checkbox h-5 w-5 text-blue-600 rounded"
    />
  );
};

export default checkbox;