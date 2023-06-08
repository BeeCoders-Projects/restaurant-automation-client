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
                    rounded_sm,
                    loading,
                    yellow,
                    content_sm,
                    content_xl,
                    ...rest
                }){
    const classes = className(rest.className,
        'flex items-center justify-center py-1.5',
        {
            'opacity-80': loading,
            'bg-yellow-300': primary,
            'rounded-full': rounded,
            'rounded-xl': rounded_sm,
            'hover:bg-yellow-200 bg-yellow-300': yellow,

            'p-2 text-sm': content_sm,
            'p-6 text-2xl': content_xl,
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