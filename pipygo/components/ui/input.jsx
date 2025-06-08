
export function Input({ className, ...props }) {
  return <input className={`border border-gray-300 px-3 py-2 rounded-lg w-full ${className}`} {...props} />;
}
