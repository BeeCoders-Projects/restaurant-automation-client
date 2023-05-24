import className from 'classnames';
import {GoSync} from 'react-icons/go';

function Button({
                    children,
                    primary,
                    secondary,
                    success,
                    warning,
                    danger,
                    outline,
                    rounded,
                    loading,
                    ...rest
                }){
    const classes = className(rest.className,
        'flex items-center py-1.5',
        {
            'opacity-80': loading,
            'bg-yellow-300': primary,
            'rounded-full': rounded,
        }
        )

    return (
        <button {...rest} disabled={loading} className={classes}>
            {loading ? <GoSync className="animate-spin"/> : children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1) {
            return new Error(
                'Only one of primary, secondary, success, warning, danger can be true'
            );
        }
    },
};

export default Button;