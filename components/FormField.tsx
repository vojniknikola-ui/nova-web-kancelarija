import { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

interface BaseFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
}

interface InputFieldProps extends BaseFieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'date' | 'time';
}

interface TextareaFieldProps extends BaseFieldProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  type: 'textarea';
}

interface SelectFieldProps extends BaseFieldProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  type: 'select';
  children: ReactNode;
}

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

export default function FormField(props: FormFieldProps) {
  const { label, error, required, className = '', ...inputProps } = props;

  const baseInputClasses = 'w-full px-4 py-3 border rounded-lg transition-colors focus-visible focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed';
  const inputClasses = error
    ? `${baseInputClasses} border-error text-error placeholder:text-error/60`
    : `${baseInputClasses} border-slate-300 text-slate-900 placeholder:text-slate-400`;

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-error ml-1" aria-label="required">*</span>}
      </label>

      {props.type === 'textarea' ? (
        <textarea
          {...(inputProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`${inputClasses} min-h-[100px] resize-vertical`}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
        />
      ) : props.type === 'select' ? (
        <select
          {...(inputProps as SelectHTMLAttributes<HTMLSelectElement>)}
          className={inputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
        >
          {props.children}
        </select>
      ) : (
        <input
          {...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
          className={inputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
        />
      )}

      {error && (
        <p
          id={`${props.id}-error`}
          className="text-sm text-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}