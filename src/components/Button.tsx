import { ButtonHTMLAttributes,} from "react";
import { cva } from "class-variance-authority";


const classes = cva('border h-12 rounded-full px-4 font-medium', {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950 border-lime-400",
            secondary:"border-white text-white bg-trandparent",
        },
        size: {
            sm: "h-10",
        },
    },
})

export default function Button(props: 
    {variant: "primary" | "secondary"
        size?: "sm"
    } 
    & ButtonHTMLAttributes<HTMLButtonElement>) {
    const {variant, className, size, ...otherprops} = props;
    return (
        <button
    className={classes({ 
        variant, 
        className,
        size,
        })}
            {...otherprops}
    />
    )
     
    
}

