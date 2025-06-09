const label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="text-sm font-medium text-white">
    {children}
  </label>
);

export default label;
