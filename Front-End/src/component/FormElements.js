import PropTypes from 'prop-types';
import React from 'react';

export const CheckboxRadio = ({
  id,
  labelText,
  register,
  type,
  errors,
  rules,
  value,
  name,
}) => {
  return (
    <>
      <div className='form-check'>
        <input
          className={`form-check-input ${errors[name] && 'is-invalid'}`}
          type={type}
          name={name}
          id={id}
          value={value}
          {...register(name, rules)}
        />
        {/* Radio 使用 Name 欄位 */}
        <label className='form-check-label' htmlFor={id}>
          {labelText}
        </label>
        {errors[name] && (
          <div className='invalid-feedback'>{errors[name]?.message}</div>
        )}
      </div>
    </>
  );
};

CheckboxRadio.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  rules: PropTypes.object.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export const Input = ({ id, labelText, placeholder, register, type, errors, rules }) => {
  return (
    <>
      <label htmlFor={id} className='form-label'>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`form-control ${errors[id] && 'is-invalid'}`}
        {...register(id, rules)}
        style={{ '--placeholder-color': 'rgba(0, 0, 0, 0.2)',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)' }}
      />
      {errors[id] && (
        <div className='invalid-feedback'>{errors[id]?.message}</div>
      )}
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  rules: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
};

// export const ButtonGroup = ({
//   id,
//   labelText,
//   register,
//   type,
//   errors,
//   rules,
//   ariaLabel,
//   value,
// }) => {
//   return (
//     <>
//       <div className="btn-group" role="group" aria-label={ariaLabel}>
//         <button
//           id={id}
//           type={type}
//           value={value}
//           {...register(id, rules)}
//           className={`btn btn-primary ${errors[id] && 'is-invalid'}`}
//         >
//           {labelText}
//         </button>
//         {errors[id] && (
//           <div className='invalid-feedback'>{errors[id]?.message}</div>
//         )}
//       </div>
//     </>
//   );
// };

// ButtonGroup.propTypes = {
//   id: PropTypes.string.isRequired,
//   labelText: PropTypes.string.isRequired,
//   register: PropTypes.func.isRequired,
//   type: PropTypes.string.isRequired,
//   errors: PropTypes.object.isRequired,
//   rules: PropTypes.object.isRequired,
//   ariaLabel: PropTypes.string.isRequired,
//   value: PropTypes.string,
// };

